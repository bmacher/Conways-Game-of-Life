define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/app-template.html',
  'views/field-view'
], ($, _, Backbone, appTemplate, FieldView) => {
  'use strict';

  // overall view of the app that handles all outher views
  var AppView = Backbone.View.extend({
    // bind the app view to the container element
    el: '#app',
    template: _.template(appTemplate),

    // bind event handlers
    events: {
      'click #btnCreateField': 'createField'
    },

    initialize: function(){
      this.render();

      // bind all necessary elements in the initialization of the app
      this.$btnCreateField = this.$('#btnCreateField');
      this.$inpFieldSize = this.$('#inpFieldSize');

      this.fieldView = new FieldView();
    },

    render: function(){
      this.$el.html(this.template);
    },

    // EVENT HANDLERS
    createField: function(){
      
    }

  });

  return AppView;
});