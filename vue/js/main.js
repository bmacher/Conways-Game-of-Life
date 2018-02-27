(function(){

'use strict';

const app = new Vue({
  el: '#app',
  data: {
    // input bindings
    inp_fieldSize: 10,

    // component variables
    fieldSize: null,
    errMessage: '',
    showField: false,
    states: [],
    timer: null,
    running: false,
    coordinates: ''
  },
  methods: {
    toggleStateOfCell: function( x, y ) {
      if ( !this.running ) {
        this.states[ x-1 ].splice( y-1, 1, !this.states[ x-1 ][ y-1 ] );
      }
    },
    
    // EVENT HANDLER
    btnCreateField: function() {
      this.errMessage = '';
      this.showField  = false;
      this.states = [];

      // validate input
      // input is null
      if ( this.inp_fieldSize === null ) {
        this.errMessage = 'Typ in a number...';
      } 
      
      // input has to be a number
      else if ( isNaN( this.inp_fieldSize )) {
        this.errMessage = 'You have to type in a number...';
      }  
      
      // input has to be between 2 and 20
      else if ( this.inp_fieldSize < 2 || this.inp_fieldSize > 20 ) {
        this.errMessage = 'Your input has to be between 2 and 20...';
      }

      // show field
      else {
        this.showField = true;
        this.fieldSize = +this.inp_fieldSize;

        // fill array initially -> 2 dimensional
        for ( let x = 1; x <= this.fieldSize; x++ ) {
          this.states.push( [] );
          for ( let y = 1; y <= this.fieldSize; y++ ) {
            this.states[ x-1 ].push( false );
          }
        }
      }
    },

    btnNextGenClick: function() {
      this.states = createNextGeneration( this.states );
    },

    btnStartClick: function() {
      this.timer = setInterval( () => {
        this.states = createNextGeneration( this.states );
      }, 500);

      this.running = true;
    },

    btnStopClick: function () {
      clearInterval( this.timer );

      this.running = false;
    }
  }
});

/**
 * HELPER FUNCTIONS
 */

/**
 * Validates coordinates to avoud overflows
 * 
 * @param {number} fieldSize The size of the field
 * @param {number} coordinate Coordinate of the selected cell
 * @returns {number} Valid coordinate
 */
function validateCoordinate( fieldSize, coordinate ) {
  /*
    Correct neighbour coordinates for 1_1
     max_max max_1 max_2
     0_max-1   0_1   0_2
     1_max-1   1_0   1_1
     -1 -> max & (max) -> 0 
  */
  if ( coordinate < 0 ) {    
    return ( fieldSize - 1 );
  }
  if ( coordinate == fieldSize )  {
    return 0;
  }
  
  return coordinate;
}

/**
 * Determines new state of a given cell
 * 
 * @param {array} currentStateOfCells Array with the current states of all cells
 * @param {number} row Number of the cells row
 * @param {number} col Number of the cells column
 * @returns {number} New state of cell (1 OR 0)
 */
function getNewStateOfCell( currentStateOfCells, row, col ) {
  const cell = currentStateOfCells[ row ][ col ];
  const fieldSize = currentStateOfCells.length;
  let livingNeighbours = 0;

  // check neighbours states and increase livingNeighbours by 1 if a neighbour is living ( alive = true )
  for ( let nbRow = -1; nbRow <= 1; nbRow++ ) {
    for ( let nbCol = -1; nbCol <= 1; nbCol++ ) {
      if ( currentStateOfCells[ validateCoordinate( fieldSize, row + nbRow )]
                              [ validateCoordinate( fieldSize, col + nbCol )]) {
        livingNeighbours++;
      }
    }
  }
  // if cell is alive itself, decrease livingNeighbours by 1
  if ( cell ) {
    livingNeighbours--;
  }

  // determine, if cell will live or not
  // 1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
  if ( cell && livingNeighbours < 2 ) {
    return false;
  }
  // 2. Any live cell with two or three live neighbours lives on to the next generation.
  if ( cell && livingNeighbours >= 2 && livingNeighbours <= 3 ) {
    return true;
  }
  // 3. Any live cell with more than three live neighbours dies, as if by overpopulation.
  if ( cell && livingNeighbours > 3 ) {
    return false;
  }
  // 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  if ( cell === false && livingNeighbours === 3 ) {
    return true;
  }

  return false;
}

/**
 * CORE FUNCTION
 */

/**
 * Creates the next generation
 * 
 * @param {array} currentGeneration Array with the current states of all cells
 * @returns {array} Array with the next generation
 */
function createNextGeneration ( currentGeneration ) {
  const fieldSize = currentGeneration.length;
  let newGeneration = [];
  
  // calculate new states
  for ( let row = 0; row < fieldSize; row++ ) {
    newGeneration.push( [] );
    for ( let col = 0; col < fieldSize; col++ ) {
      newGeneration[ row ].push( getNewStateOfCell( currentGeneration, row, col ));
    }
  }

  return newGeneration;
}

})();