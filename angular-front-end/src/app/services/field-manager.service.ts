import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Field } from '../classes/field';

@Injectable()
export class FieldManager {
  public field: Field;
  private uri = 'http://localhost:3000/cgof/next-gen';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor (
    private http: HttpClient ) {  }

  // HELPERS --------------

  toggleStateOfCell (row, col: number): void {
    if (this.field.cells[row][col] === false) {
      this.field.cells[row][col] = true;
    } else {
      this.field.cells[row][col] = false;
    }
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
  }

  createNextGeneration (): void {
    this.http.post<boolean[][]>( this.uri, this.field.cells, this.httpOptions )
      .subscribe( res => this.field.cells = res );
  }
}
