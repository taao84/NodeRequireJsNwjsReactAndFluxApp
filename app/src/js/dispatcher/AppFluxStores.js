define(function(LocationStore, TodoStore) {
  var LocationStore = requirejs('LocationStore');
  var TodoStore = requirejs('TodoStore');

  var location =  new LocationStore();
  var todo =  new TodoStore();
  var AppFluxStores = {
    LocationStore : location,
    TodoStore : todo
  };

  return AppFluxStores;
});
