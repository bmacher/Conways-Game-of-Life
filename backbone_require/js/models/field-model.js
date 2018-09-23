define([
  'underscore',
  'backbone',
], (_, Backbone) => {
  'use strict';

  var FieldModel = Backbone.Model.extend({
    defaults: {
      size: null,
      running: false,
      cells: null
    },

    initialize: function(params){
      this.size = params.size; 
      this.cells = [];          
      
      // Inital fill cells with false => dead
      for (let x=0; x<this.size; x++) {
        // Add new row to cell
        this.cells.push([]);

        for (let y=0; y<this.size; y++) {
          this.cells[x].push(false);          
        }
      }
    },

    /**
     * Toggle the state of the field
     */
    toggleState: function(){
      this.running = !this.running;
    },

    /**
     * Set state of a given cell
     * 
     * @param {number} row - Row coordinate of cell
     * @param {number} col - Col coordinate of cell
     * @param {boolean} stats - New state of the cell
     */
    setStateOfCell: function(row, col, state){
      this.cells[row][col] = state;
    },
    
    /**
     * Get state of a given cell
     * 
     * @param {number} row - Row coordinate of cell
     * @param {number} col - Col coordinate of cell
     * @returns {boolean} New state of the cell
     */
    getStateOfCell: function(row, col){
      return this.cells[row][col];
    },

    /**
     * GAME LOGIC
     */

    /**
     * Validates coordinates to avoid overflows
     * 
     * @param {number} coordinate - Coordinate of the selected cell
     * @returns {number} Valid coordinate
    */
    validateCoordinate: function(coordinate){
      /**
       * Correct neighbour coordinates for 1_1
       * max_max max_1 max_2
       * 0_max-1   0_1   0_2
       * 1_max-1   1_0   1_1
       * -1 -> max & (max) -> 0 
       */
      if (coordinate < 0) {    
        return (this.size - 1);
      }
      if (coordinate == this.size) {
        return 0;
      }
      
      return coordinate;
    },

    /**
     * Determines new state of a given cell
     * 
     * @param {array} currentStateOfCells - Array with the current states of all cells
     * @param {number} row - Number of the cells row
     * @param {number} col - Number of the cells column
     * @returns {number} New state of cell (1 || 0)
     */
    getNewStateOfCell: function(currentStateOfCells, row, col){
      const cell = currentStateOfCells[row][col];
      let livingNeighbours = 0;

      // Check neighbours states and increase livingNeighbours by 1 if a neighbour is living (alive = true)
      for (let nbRow = -1; nbRow <= 1; nbRow++) {
        for (let nbCol = -1; nbCol <= 1; nbCol++) {
          if (currentStateOfCells[this.validateCoordinate(row + nbRow)]
                                 [this.validateCoordinate(col + nbCol)]) {
            livingNeighbours++;
          }
        }
      }
      // If cell is alive itself, decrease livingNeighbours by 1
      if (cell) {
        livingNeighbours--;        
      }

      // Determine, if cell will live or not
      // 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
      if (cell && livingNeighbours < 2) {
        return false;
      }
      // 2. Any live cell with two or three live neighbours lives on to the next generation.
      if (cell && livingNeighbours >= 2 && livingNeighbours <= 3) {
        return true;
      }
      // 3. Any live cell with more than three live neighbours dies, as if by overpopulation.
      if (cell && livingNeighbours > 3) {
        return false;
      }
      // 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
      if (cell === false && livingNeighbours === 3) {
        return true;
      }
      
      return false;
    },

    /**
     * Creates the next generation
     * 
     * @returns {array} Array with the next generation
     */
    createNextGeneration: function(){
      // Need to stringify and parse json otherwise
      // it would be a direct object reference
      const currentGeneration = JSON.parse(JSON.stringify(this.cells));

      // Calculate new states
      for (let row = 0; row < this.size; row++) {
        for (let col = 0; col < this.size; col++) {
          this.cells[row][col] = this.getNewStateOfCell(currentGeneration, row, col);
        }
      }

      // Trigger change of cells to actice event listeners
      this.trigger('change:cells');
    }
  });

  return FieldModel;
});