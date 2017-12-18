import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    this.router.navigate( [ '/field/', this.fieldSize ] );
    return true;
  }
}
