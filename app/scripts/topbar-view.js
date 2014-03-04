var TopBarView = Backbone.View.extend({

  template: _.template($('#topbar-template').text()),

  className: 'topbar',

  initialize: function(){

    this.listenTo(this.model, 'change', this.render)


    $('body').prepend(this.el);
    this.render();
  },

  render: function(){
    this.$el.html( this.template({user: this.model}) )
  }

})
