import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";

import { FieldManager} from '../../services/field-manager.service';
//import { setInterval } from 'timers';

@Component({
  selector: 'app-conways-field',
  templateUrl: './conways-field.component.html',
  styleUrls: ['./conways-field.component.css']
})
export class ConwaysFieldComponent implements OnInit {
  private coordinates: string;
  private subscription: Subscription;
  errMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private fieldManager: FieldManager ) {
    // check, if field size is set
    if (this.route.snapshot.paramMap.get('fieldsize') != null) {
      // extract field size from URL
      let fieldSize = +this.route.snapshot.paramMap.get('fieldsize');

      // number has to be between 2 and 20
      if ( fieldSize > 1 && fieldSize < 21 ) {
        // create field
        fieldManager.createField(fieldSize);
      } else {
        this.errMessage = 'Your input has to be between 2 and 20...';
      }
    }
    console.log(this.errMessage);
  }

  ngOnInit() { }

  ngOnDestroy () {
    // check if subscription is defined
    if ( typeof this.subscription !== 'undefined' ) {
      this.subscription.unsubscribe();
    }
  }

  // EVENT HANDLERS -------

  mouseCellEnter ( x, y: number): void {
    this.coordinates = '{ x'+ x +', y: '+ y +' }';
  }

  mouseCellLeave (): void {
    this.coordinates = '';
  }

  btnStart (): void {
    // set field in running mode
    this.fieldManager.field.running = true;

    // init timer
    let timer = TimerObservable.create(0, 500);
    this.subscription = timer.subscribe( () => { this.fieldManager.createNextGeneration() } );
  }

  btnStop (): void {
    // set field in sleeping mode
    this.fieldManager.field.running = false;

    // clear timer
    this.subscription.unsubscribe();
  }
}
