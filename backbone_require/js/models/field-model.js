define([
  'underscore',
  'backbone',
], (_, Backbone) => {
  'use strict';

  var FieldModel = Backbone.Model.extend({
    default: {
      size: null,
      running: false,
      cells: null
    },

    initialize: function(params){
      let size = params.size; 
      this.cells = [];           

      // inital fill cells with false => dead
      for (let x=0; x<size; x++) {
        // add new row to cell
        this.cells.push([]);

        for (let y=0; y<size; y++) {
          this.cells[x].push(false);          
        }
      }        
    },

    // Toggle the state of the field
    toggleState: function(){
      this.running = !this.running;
    }

    // IMPORT FIELDMANAGER from root
  });

  return FieldModel;
});