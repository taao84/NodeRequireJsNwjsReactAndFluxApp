define(['Fluxxor', 'LocationConstants'], function(Fluxxor, LocationConstants) {

  var LocationStore = Fluxxor.createStore({

    initialize: function() {
      this.loading = false;
      this.locations = [];
      this.errorMessage = null;

      this.bindActions(
        LocationConstants.LOAD_LOCATIONS, this.loadingLocations,
        LocationConstants.FETCH_LOCATIONS_SUCCESS, this.fetchLocations,
        LocationConstants.FETCH_LOCATIONS_FAILED, this.fetchLocationsFailed
      );
    },

    getState: function() {
      return {
        loading: this.loading,
        locations: this.locations,
        errorMessage: this.errorMessage
      };
    },

    loadingLocations : function() {
      this.loading = true;
      this.errorMessage = null;
      this.emit("change");
    },

    fetchLocations : function(payload) {
      this.loading = false;
      this.errorMessage = null;
      this.locations = payload.locations;
      this.emit("change");
    },

    fetchLocationsFailed  : function(payload) {
      this.loading = false;
      this.locations = [];
      this.errorMessage = payload.errorMessage;
      this.emit("change");
    }
  });

  return LocationStore;
});
