import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  field = [
    [ 'alive', 'dead'],
    [ 'dead', 'alive']
  ];

  constructor() { }

  ngOnInit() {
  }

}
