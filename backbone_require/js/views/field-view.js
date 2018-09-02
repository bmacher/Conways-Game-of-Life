define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/field-template.html',
], ($, _, Backbone, FieldTemplate) => {
  'use strict';

  var FieldView = Backbone.View.extend({
    el: 'main',
    model: null,
    template: _.template(FieldTemplate),

    initialize: function(){      
      // React to field state changes
      this.listenTo(this.model, 'change:running', this.handleFieldStateChange);
      this.listenTo(this.model, 'change:cells', this.renderCells);
    },

    render: function(){
      this.$el.html(this.template);
      const fieldSize = this.model.get('size');
      
      // Bind elements to local variables
      this.$btnStart   = this.$('#btnStart');
      this.$btnNextGen = this.$('#btnNextGen');
      this.$btnStop    = this.$('#btnStop');
      this.$field      = this.$('#field');
      
      // set height to width of field, otherweise it would be 0
      this.$field.css('height', this.$field.width());

      // Create all cells -> number of cells equals the square of size      
      for (let x=0; x<Math.pow(fieldSize, 2); x++) {
        let $cell = $('<div class="cell dead" />');          
        
        // Set dynamic width and height based on field size
        // 100% divided by field size
        // Add x and y coordinate
        $cell
          .width('calc(100% / '+ this.model.get('size') +')')
          .height('calc(100% / '+ this.model.get('size') +')')
          .attr('x', x%fieldSize)
          .attr('y', Math.floor(x/fieldSize));
          // Math.floor returns the largest integer less than or equal to a number.
        
        this.$field.append($cell);
      }

      this.addCellEventHandler();
    },

    renderCells: function(){
      $('#field').children().each((key, cell) => {
        $(cell);

        // Get state from model and rerender cell
      });
    },

    /**
     * Adds all event handlers to cells
     */
    addCellEventHandler: function(){
      const $cell = $('.cell');
      
      $cell.on('click', event => {
        this.toggleStateOfCell($(event.target));     
      });

      // Show coordinates of cell on mouseover
      $cell.on('mouseover', event => {
        const $cell = $(event.target);
        $('footer>h4').html(
          // { x:1, y:2 }
          '{ '+$cell.attr('x')+', '+$cell.attr('y')+' }'
        );
      });

      // Hide coordinates of cell on mouseover
      $cell.on('mouseout', () => {
        $('footer>h4').html('&copy; Benjamin Macher');
      });
    },
    
    /**
     * Handles field state changes by enabling and
     * disabling Start and Next Generation Button
     */
    handleFieldStateChange: function(){
      // If state is running, buttons should be disabled
      // running = true -> disabled = true
      this.$btnStart.attr('disabled', this.model.get('running'));
      this.$btnNextGen.attr('disabled', this.model.get('running'));
    },

    /**
     * EVENT HANDLER SECTION
     */

    /**
     * Changes the state of the cell in the modell
     * @param {Object} $cell - jQuery element of the cell
     */
    toggleStateOfCell: function($cell){
      // Change state in model
      
      if (!this.model.get('running')) { 
        $cell.toggleClass('alive dead');
      }      
    }
  });

  return FieldView;
});