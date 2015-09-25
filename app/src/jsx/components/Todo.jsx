define(function(requirejs) {
  var React = requirejs("React");
  var Fluxxor = requirejs("Fluxxor");
  var TodoItem = requirejs("jsx!TodoItem");

  var FluxMixin = Fluxxor.FluxMixin(React),
      StoreWatchMixin = Fluxxor.StoreWatchMixin;

  var Todo = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("TodoStore")],

    getInitialState: function() {
      return { newTodoText: "" };
    },

    /**
     * Returns an object representing the part of the component's state that
     * comes from the Flux stores.
     */
    getStateFromFlux: function() {
      var flux = this.getFlux();
      // Our entire state is made up of the TodoStore data. In a larger
      // application, you will likely return data from multiple stores, e.g.:
      //
      //   return {
      //     todoData: flux.store("TodoStore").getState(),
      //     userData: flux.store("UserStore").getData(),
      //     fooBarData: flux.store("FooBarStore").someMoreData()
      //   };
      return flux.store("TodoStore").getState();
    },

    render: function() {
      var todos = this.state.todos;

      var alignStyle = {
        display: "inline-block",
        verticalAlign: "middle",
        float: "none"
      }

      return (
        <div>
          <div className="panel panel-primary">
            <div className="panel-body">
              <form onSubmit={this.onSubmitForm} className="form-inline">
                <input type="text" placeholder="New Todo"
                         value={this.state.newTodoText}
                         onChange={this.handleTodoTextChange}
                         style={alignStyle}
                         className="form-control inline" />
                <input type="submit" value="Add Todo" className="btn btn-default inline" />
              </form>
              <button onClick={this.clearCompletedTodos} className="btn btn-default">Clear Completed</button>
              <ul>
                {
                  Object.keys(todos).map(function(id) {
                    return <li key={id}><TodoItem todo={todos[id]} /></li>;
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      );
    },

    handleTodoTextChange: function(e) {
      this.setState({newTodoText: e.target.value});
    },

    onSubmitForm: function(e) {
      e.preventDefault();
      if (this.state.newTodoText.trim()) {
        this.getFlux().actions.addTodo(this.state.newTodoText);
        this.setState({newTodoText: ""});
      }
    },

    clearCompletedTodos: function(e) {
      this.getFlux().actions.clearTodos();
    }
  });

  return Todo;
});
