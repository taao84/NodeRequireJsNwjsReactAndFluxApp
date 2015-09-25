define(['Fluxxor', 'AppFluxStores', 'AppFluxActions'],
  function(Fluxxor, AppFluxStores, AppFluxActions) {

  var stores = AppFluxStores;
  var actions = AppFluxActions;

  var flux = new Fluxxor.Flux(stores, actions);

  flux.on("dispatch", function(type, payload) {
    if (console && console.log) {
      console.log("[Dispatch]", type, payload);
    }
  });

  return {
    flux : flux
  }
});
