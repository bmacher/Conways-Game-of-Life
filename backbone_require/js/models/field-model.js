define([
  'underscore',
  'backbone'
], (_, Backbone) => {
  'use strict';

  var FieldModel = Backbone.Model.extend({
    default: {
      size: null,
      running: false
    },

    // Toggle the state of the field
    toggleState: function(){
      this.running = !this.running;
    }
  });

  return FieldModel;
});