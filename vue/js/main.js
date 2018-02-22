(function(){

'use strict';

new Vue({
  el: '#app',
  data: {
    fieldSize: null,
    errMessage: '',
    showField: false
  },
  methods: {
    createField: function() {
      this.showField  = false;
      this.errMessage = '';
      
      // validate input
      // input is null
      if ( this.fieldSize === null ) {
        this.errMessage = 'Type in a number...';
      } 
      
      // input has to be a number
      else if ( isNaN( this.fieldSize )) {
        this.errMessage = 'You have to type in a number...';
      }  
      
      // input has to be between 2 and 20
      else if ( this.fieldSize < 2 || this.fieldSize > 20 ) {
        this.errMessage = 'Your input has to be between 2 and 20...';
      }

      // show field
      else {
        this.showField = true;
      }
    }
  }
});

})();