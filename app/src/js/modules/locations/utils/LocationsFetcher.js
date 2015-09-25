define(function() {
  var LocationsFetcher = {
    fetch : function(success, failure) {
      // simulate an asynchronous action where data is fetched on
      // a remote server somewhere.
      var passFail = Math.random() * 10;
      setTimeout(function () {
        // resolve with some mock data
        if (passFail < 5) {
          success(mockData);
        } else {
          failure("We failed loading the locations");
        }
      }, 1000);
    }
  };

  var mockData = [
    { id: 0, name: 'Abu Dhabi' },
    { id: 1, name: 'Berlin' },
    { id: 2, name: 'Bogota' },
    { id: 3, name: 'Buenos Aires' },
    { id: 4, name: 'Cairo' },
    { id: 5, name: 'Chicago' },
    { id: 6, name: 'Lima' },
    { id: 7, name: 'London' },
    { id: 8, name: 'Miami' },
    { id: 9, name: 'Moscow' },
    { id: 10, name: 'Mumbai' },
    { id: 11, name: 'Paris' },
    { id: 12, name: 'San Francisco' }
  ];

  return LocationsFetcher;
});
