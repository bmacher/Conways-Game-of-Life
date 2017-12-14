import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  field = [];
  fieldSize = +this.route.snapshot.paramMap.get('fieldsize');

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    for ( let x = 0; x < this.fieldSize; x++ ) {
      this.field[ x ] = [];
      for ( let y = 0; y < this.fieldSize; y++ ) {
        this.field[ x ][ y ] = 'alive';
      }
    }
  }
}
