define([
  'jquery',
  'underscore',
  'backbone',
  'models/field-model',
  'text!templates/field-template.html'
], ($, _, Backbone, fieldModel, fieldTemplate) => {
  'use strict';

  var FieldView = Backbone.View.extend({
    el: 'main',
    model: new fieldModel({id: this.id}),
    template: _.template(fieldTemplate),

    initialize: function(){
      this.render();

      // elements have to be rendered before they can be assigned
      this.$btnStart   = this.$('#btnStart');
      this.$btnNextGen = this.$('#btnNextGen');
      this.$btnStop    = this.$('#btnStop');

      // react to field state changes
      this.listenTo(this.model, 'change:running', this.handleFieldStateChange);
    },

    render: function(){
      this.$el.html(this.template);
      
      // set height to width of field, otherweise it wouldn't have one
      this.$('.field').css('height', this.$('.field').css('width'));
    },
 
    handleFieldStateChange: function(){
      // if state is running, buttons should be disabled
      // running = true -> disabled = true
      this.$btnStart.attr('disabled', this.model.get('running'));
      this.$btnNextGen.attr('disabled', this.model.get('running'));
    }

  });

  return FieldView;
});