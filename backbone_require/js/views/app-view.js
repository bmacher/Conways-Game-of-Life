define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/app-template.html',
  'models/field-model',
  'views/field-view'
], ($, _, Backbone, appTemplate, FieldModel, FieldView) => {
  'use strict';

  // Overall view of the app that handles all outher views
  var AppView = Backbone.View.extend({
    // Bind the app view to the container element
    el: '#app',
    template: _.template(appTemplate),

    // Bind event handlers
    events: {
      'click #btnCreateField': 'createField'
    },

    render: function(){
      this.$el.html(this.template);
      
      // Bind elements to local variables
      this.$btnCreateField = this.$('#btnCreateField');
      this.$inpFieldSize   = this.$('#inpFieldSize');
      this.$errMsgBox      = this.$('#errMsgBox');
    },

    /**
     * EVENT HANDLER SECTION
     */

    /**
     * Create field
     * @returns {Boolean} - true=created, false=failed
     */
    createField: function(){
      const inpSize = this.$inpFieldSize.val();
      this.$errMsgBox.text('').hide();  
      
      // Validate input
      if (inpSize === '' || inpSize === null) {
        this.$errMsgBox.text('Type in a number.').show();
        return false;
      } 
      
      // Input has to be a number
      if (isNaN(inpSize)) {
        this.$errMsgBox.text('You have to type in a number.').show();
        return false;
      }

      // Input has to be a number between 2 and 20
      if (inpSize < 2 || inpSize > 20) {
        this.$errMsgBox.text('Your input has to be between 2 and 20.').show();
        return false;
      }

      // Init model and view
      this.fieldModel = new FieldModel({size: inpSize});
      this.fieldView  = new FieldView({model: this.fieldModel});
      this.fieldView.render();
    }

  });

  return AppView;
});