import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  field: Array<Array<String>> = [[]];
  fieldSize: number;

  constructor( private route: ActivatedRoute ) {
    if (this.route.snapshot.paramMap.get('fieldsize') != null) {
      this.fieldSize = +this.route.snapshot.paramMap.get('fieldsize');
    }

    for ( let x = 0; x < this.fieldSize; x++ ) {
      this.field[ x ] = [];
      for ( let y = 0; y < this.fieldSize; y++ ) {
        this.field[ x ][ y ] = 'dead';
      }
    }
   }

  ngOnInit() { }
}
