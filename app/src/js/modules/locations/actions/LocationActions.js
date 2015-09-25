define(['LocationConstants', 'LocationsFetcher'], function(LocationConstants, LocationsFetcher) {
  var LocationActions = {
    updateLocations : function(locations) {
      this.dispatch(LocationConstants.LOAD_LOCATIONS);
    },

    fetchLocations: function() {
      this.dispatch(LocationConstants.LOAD_LOCATIONS);

      LocationsFetcher.fetch(function(locations) {
        // we can access other actions within our action through `this.actions`
        this.dispatch(LocationConstants.FETCH_LOCATIONS_SUCCESS, {locations: locations});
      }.bind(this), function(errorMessage) {
        this.dispatch(LocationConstants.FETCH_LOCATIONS_FAILED, {errorMessage: errorMessage});
      }.bind(this));
    },

    fetchLocationsFailed: function(errorMessage) {
      this.dispatch(errorMessage);
    }
  };

  return LocationActions;
});
