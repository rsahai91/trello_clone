window.Trellino.Views.BoardNew = Backbone.View.extend({
  template: JST['boards/new'],

  events: {
    "submit": "createNewBoard"
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  createNewBoard: function (event) {
    event.preventDefault();
    var formData = $(event.target).serializeJSON();
    var newModel = this.collection.create(formData, {
      success: function () {
        Trellino.router.navigate("boards/" + newModel.get('id'), {trigger: true});
      }
    });

  },
})
