import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conways-nav',
  templateUrl: './conways-nav.component.html',
  styleUrls: ['./conways-nav.component.css']
})
export class ConwaysNavComponent implements OnInit {
  fieldSize: number;
  errMessage = '';

  constructor ( private router: Router ) {}

  // click on "Create field NxN"
  btnCrtFieldClick () {
    // clean error message
    this.errMessage = '';

    // validate input
    // input has to be a number
    if ( isNaN( this.fieldSize ) ) {
      this.errMessage = 'You have to type in a number...';
      return false;
    }

    // input has to be between 2 and 20
    if ( this.fieldSize < 2 || this.fieldSize > 20 ) {
      this.errMessage = 'Your input has to be between 2 and 20...';
      return false;
    }

    // navigate to field component
    this.router.navigate( [ '/conways-field/', this.fieldSize ] );
    return true;
  }

  ngOnInit() {
  }

}
