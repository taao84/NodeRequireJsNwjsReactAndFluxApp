define(['TodoConstants'], function(TodoConstants) {
  var TodoActions = {
    addTodo: function(text) {
      this.dispatch(TodoConstants.ADD_TODO, {text: text});
    },

    toggleTodo: function(id) {
      this.dispatch(TodoConstants.TOGGLE_TODO, {id: id});
    },

    clearTodos: function() {
      this.dispatch(TodoConstants.CLEAR_TODOS);
    }
  };

  return TodoActions;
});
