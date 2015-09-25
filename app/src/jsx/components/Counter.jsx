define(function(requirejs) {
  var Fluxxor = requirejs("Fluxxor");
  var React = requirejs("React");
  
  var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

  var Counter = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("TodoStore")],

    /**
     * Returns an object representing the part of the component's state that
     * comes from the Flux stores.
     */
    getStateFromFlux: function() {
      var flux = this.getFlux();
      return flux.store("TodoStore").getState();
    },

    incrementCount: function(){
      this.setState({
        count: this.state.count + 1
      });
    },

    getInitialState: function(){
       return {
         count: 0
       }
    },

    render: function(){
      var todos = this.state.todos;
      var todoKeys = Object.keys(todos);

      return (
        <div className="panel panel-primary">
          <div className="panel-body">
            <h1>Count: {this.state.count}</h1>
            <button type="button" onClick={this.incrementCount}>Increment</button>
          </div>
          <div className="panel-body">
            <span>We got {todoKeys.length} tasks</span>
          </div>
        </div>
      );
    }
  });

  return Counter;
});
