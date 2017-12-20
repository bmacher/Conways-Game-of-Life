import { Injectable } from '@angular/core';

import { Field } from '../classes/field';

@Injectable()
export class FieldManager {
  field: Field;
  // field: <Array<Array<boolean>>;

  constructor () {}

  createField (fieldSize: number) {
    // init field with size and empty cells
    this.field = {
      size: fieldSize,
      cells: [[]]
    };

    // set inital state of all cells
    for ( let row = 0; row < fieldSize; row++ ) {
      // append row
      this.field.cells.push([]);
      for ( let col = 0; col < fieldSize; col++ ) {
        // append cell
        this.field.cells[row].push(false);
      }
    }
  }

  toggleStateOfCell (row, col: number): void {
    if (this.field.cells[row][col] === false) {
      this.field.cells[row][col] = true;
    } else {
      this.field.cells[row][col] = false;
    }
  }
}
