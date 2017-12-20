import { Injectable } from '@angular/core';

@Injectable()
export class FieldManager {
  field: Array<Array<boolean>> = [[]];

  constructor () {}

  createField (fieldSize: number) {
    for ( let row = 0; row < fieldSize; row++ ) {
      // append row
      this.field[row] = [];
      for ( let col = 0; col < fieldSize; col++ ) {
        // append cell
        this.field[row][col] = false;
      }
    }
  }

  toggleStateOfCell (row, col: number): void {
    if (this.field[row][col] === false) {
      this.field[row][col] = true;
    } else {
      this.field[row][col] = false;
    }
  }
}
