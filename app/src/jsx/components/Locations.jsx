define(function() {
  var Fluxxor = requirejs("Fluxxor");
  var React = requirejs("React");

  var FluxMixin = Fluxxor.FluxMixin(React),
      StoreWatchMixin = Fluxxor.StoreWatchMixin;

  var Locations = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("LocationStore")],

    getStateFromFlux: function() {
      var flux = this.getFlux();
      return flux.store("LocationStore").getState();
    },

    componentDidMount() {
      this.getFlux().actions.fetchLocations();
    },

    onChange(state) {
      this.setState(state);
    },

    selectItem : function() {},

    reloadData : function() {
      this.getFlux().actions.fetchLocations();
    },

    render() {
      var iconStyle = {
        verticalAlign: 'middle'
      };
      var spanStyle = {
        display: 'inline-block',
        verticalAlign: 'middle',
        padding: '3px',
        color: '#FF0000'
      };

      // Error loading the data for the component
      if (this.state.errorMessage) {
        return (
          <div className="panel panel-primary">
            <div className="panel-body">
              <div>
                <img style={iconStyle} src={this.props.errorIcon} />
                <span style={spanStyle}>{this.state.errorMessage}</span>
              </div>
              <br/>
              <button type="button" onClick={this.reloadData}>Reload</button>
            </div>
          </div>
        );
      }

      // Loading the component
      var loading = null;
      if (this.state.loading) {
        loading = <div><img style={iconStyle} src={this.props.loadingIcon} /></div>;
      }
      var sucessfulIcon = <div><img style={iconStyle} src={this.props.sucessfulIcon} /></div>;

      // Component loaded correctly
      var locations = this.state.locations;
      return (
        <div className="panel panel-primary">
          <div className="panel-body">
          { this.state.loading ? loading : sucessfulIcon }
          <ul>
            {
              Object.keys(locations).map(function(location) {
                return <li key={location}>{locations[location].name}</li>;
              })
            }
          </ul>
          <button type="button" onClick={this.reloadData}>Reload</button>
          </div>
        </div>
      );
    }
  });

  return Locations;
});
