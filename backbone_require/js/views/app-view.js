define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/app-template.html',
  'models/field-model',
  'views/field-view'
], ($, _, Backbone, appTemplate, FieldModel, FieldView) => {
  'use strict';

  var AppView = Backbone.View.extend({
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
      this.$field          = this.$('main');
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
      
      // Reset view
      this.$errMsgBox.text('').hide();
      
      // Validate input
      if (this.validateInput(inpSize)) {
        // Clear field view and model in case they were 
        // created before and remove cells from dom
        // aswell as all event listeners
        if (this.fieldModel || this.fieldView) {
          this.fieldModel.destroy(); 
          this.fieldModel = null;
          this.fieldView.close();
          this.fieldView = null;
          console.log('Remove active view and model.');          
        }

        // Init model and view
        console.log('Initialize field view and model.');
        this.fieldModel = new FieldModel({size: inpSize});
        this.fieldView  = new FieldView({model: this.fieldModel});      
        this.$field.show();
        this.fieldView.render();
      } else {
        this.$field.hide();
      }
    },

    /**
     * Validates the input (number between 2 and 20)
     * 
     * @param {string} input - Value of the input field
     * @returns {boolean} 
     */
    validateInput: function(input) {
      if (input === '' || input === null) {
        this.$errMsgBox.text('Type in a number.').show();
        return false;
      } 
      
      // Input has to be a number
      if (isNaN(input)) {
        this.$errMsgBox.text('You have to type in a number.').show();
        return false;
      }

      // Input has to be a number between 2 and 20
      if (input < 2 || input > 20) {
        this.$errMsgBox.text('Your input has to be between 2 and 20.').show();
        return false;
      }
      
      return true;
    }

  });

  return AppView;
});