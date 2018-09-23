define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/field-template.html'
], ($, _, Backbone, FieldTemplate) => {
  'use strict';

  var FieldView = Backbone.View.extend({
    el: 'main',
    template: _.template(FieldTemplate),
    model: {},

    events: {
      'click #btnStart': 'clickBtnStart',
      'click #btnNextGen': 'clickBtnNextGen',
      'click #btnStop': 'clickBtnStop',
      'click .cell': 'clickOnCell',
      'mouseover .cell': 'mouseOverCell',
      'mouseout .cell': 'mouseOutCell'
    },

    initialize: function(){      
      // React to field state changes
      this.listenTo(this.model, 'change:running', this.handleFieldStateChange);
      this.listenTo(this.model, 'change:cells', this.renderCells);
    },

    close: function(){
      // Remove all event listeners, otherwise their are added twice
      // if view is instancieded twice
      this.$el.empty();
      this.undelegateEvents();
    },

    render: function(){      
      this.$el.html(this.template);
      const fieldSize = this.model.get('size');
      
      // Bind elements to local variables and add event handlers
      this.$btnStart   = this.$('#btnStart');
      this.$btnNextGen = this.$('#btnNextGen');
      this.$btnStop    = this.$('#btnStop');
      this.$field      = this.$('#field');
      
      // Set height to width of field, otherweise it would be 0
      this.$field.css('height', this.$field.width());

      // Create all cells -> number of cells equals the square of size      
      for (let x=0; x<Math.pow(fieldSize, 2); x++) {
        const $cell = $('<div class="cell dead" />');          
        
        // Set dynamic width and height based on field size
        // 100% divided by field size
        // Add x and y coordinate
        $cell
          .width('calc(100% / '+ this.model.get('size') +')')
          .height('calc(100% / '+ this.model.get('size') +')')
          .attr('row', Math.floor(x/fieldSize))
          .attr('col', x%fieldSize);
          // Math.floor returns the largest integer less than or equal to a number.

        this.$field.append($cell);
      }
    },

    renderCells: function(){
      this.$field.children().each((key, cell) => {                
        const $cell = $(cell);
        const row = $cell.attr('row');
        const col = $cell.attr('col');
        
        if (this.model.getStateOfCell(row, col)) {
          $cell.addClass('alive');
          $cell.removeClass('dead');
        } else {
          $cell.addClass('dead');
          $cell.removeClass('alive');
        }
      });
    },

    /**
     * EVENT HANDLER SECTION
     */

    /**
     * Click on Start button 
     */
    clickBtnStart: function(){
      console.log('Start game');
      this.timer = setInterval(() => this.model.createNextGeneration(), 500);
      this.model.set('running', true);
    },
    
    /**
     * Click on Start button 
     */
    clickBtnNextGen: function(){
      console.log('Create next generation');
      this.model.createNextGeneration();
    },
    
    /**
     * Click on Start button 
     */
    clickBtnStop: function(){
      console.log('Stop game');
      clearInterval(this.timer);
      this.model.set('running', false);
    },

    /**
     * Click on cell
     */
    clickOnCell: function(event){
      this.toggleStateOfCell($(event.target));
    },

    /**
     * Mouseover cell
     */
    mouseOverCell: function(event){
      const $cell = $(event.target);

      $('footer>h4').html(
        // { row:1, col:2 }
        '{ '+$cell.attr('row')+', '+$cell.attr('col')+' }'
      );
    },

    /**
     * Mouseout Cell
     */
    mouseOutCell: function(){
      $('footer>h4').html('&copy; Benjamin Macher');
    },

    /**
     * HELPER SECTION
     */
    
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
     * Changes the state of the cell in the model
     * @param {Object} $cell - jQuery element of the cell
     */
    toggleStateOfCell: function($cell){
      if (!this.model.get('running')) { 
        // Change state in model  
        this.model.setStateOfCell(
          $cell.attr('row'),
          $cell.attr('col'),
          $cell.hasClass('dead') ? true : false
        );
        
        $cell.toggleClass('alive dead');
      }
    }
  });

  return FieldView;
});