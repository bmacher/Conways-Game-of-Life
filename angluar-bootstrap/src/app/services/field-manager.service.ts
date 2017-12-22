import { Injectable } from '@angular/core';

import { Field } from '../classes/field';

@Injectable()
export class FieldManager {
  field: Field;
  
  constructor () {  }
  
  // HELPERS --------------

  toggleStateOfCell (row, col: number): void {
    if (this.field.cells[row][col] === false) {
      this.field.cells[row][col] = true;
    } else {
      this.field.cells[row][col] = false;
    }
  }

  validateCoordinate( coordinate ) {
    // Correct neighbour coordinates for 1_1
    //   max_max max_1 max_2 
    //   0_max-1   0_1   0_2     
    //   1_max-1   1_0   1_1
    // -1 -> max & (max) -> 0
    if ( coordinate < 0 ) {
        return (this.field.size - 1);
    }
    if ( coordinate > ( this.field.size - 1 ) )  {
        return 0;
    }

    return coordinate;
  }

  getNewStateOfCell( currentStateOfCells: Array<Array<boolean>>, row, col: number ) {
    let livingNeighbours: number = 0;
    let cell: boolean = currentStateOfCells[row][col];

    // check neighbours states and increase livingNeighbours by 1 if a neighbour is living ( alive = true )
    for ( let nbRow = -1; nbRow <= 1; nbRow++ ) {
      for ( let nbCol = -1; nbCol <= 1; nbCol++ ) {
        if ( currentStateOfCells[ this.validateCoordinate( row + nbRow ) ]
                                [ this.validateCoordinate( col + nbCol ) ] ) {
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

  // CORE FUNCTIONS -------

  createField ( fieldSize: number ): void {
    // init field
    this.field = {
      size: fieldSize,
      cells: [],
      running: false
    };

    // set inital state of all cells to false <dead>
    for ( let row = 0; row < fieldSize; row++ ) {
      // append row
      this.field.cells.push([]);
      
      for ( let col = 0; col < fieldSize; col++ ) {
        // append cell
        this.field.cells[row].push(false);
      }
    }
    this.field.cells[0][0] = true;
    this.field.cells[2][0] = true;
    this.field.cells[1][1] = true;
    this.field.cells[1][2] = true;
    this.field.cells[2][1] = true;
  }

  createNextGeneration (): void {
    let currentStateOfCells: Array<Array<boolean>> = [];

    // get current state of all cells
    for ( let row = 0; row < this.field.size; row++ ) {
      currentStateOfCells.push([]);

      for ( let col = 0; col < this.field.size; col++ ) {
        currentStateOfCells[row].push(this.field.cells[row][col]);
      }
    }

    // update states
    for ( let row = 0; row < this.field.size; row++ ) {
      
      for ( let col = 0; col < this.field.size; col++ ) {
        this.field.cells[row][col] = this.getNewStateOfCell( currentStateOfCells, row, col );
      }
    }    
  }
}
