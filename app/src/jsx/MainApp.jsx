define(function(requirejs) {
  var AppDispatcher = requirejs('AppDispatcher');
  var React = requirejs('React');
  var NavBar = requirejs('jsx!NavBar');
  var FilteredList = requirejs('jsx!FilteredList');
  var Counter = requirejs('jsx!Counter');
  var Todo = requirejs('jsx!Todo');
  var Locations = requirejs('jsx!Locations');

  function MainApp() {}

  MainApp.prototype.init = function () {
    React.render(<NavBar />, document.getElementById("navBar-mount-point"));

    React.render(<Counter flux={AppDispatcher.flux} />, document.getElementById('mount-point1'));

    React.render(<FilteredList />, document.getElementById('mount-point2'));

    React.render(<Locations flux={AppDispatcher.flux}
      loadingIcon="./assets/images/loadingIcon.gif"
      errorIcon="./assets/images/error-icon.jpg"
      sucessfulIcon="./assets/images/happy-tomato.jpg" />,
      document.getElementById("mount-point3"));

    React.render(<Todo flux={AppDispatcher.flux} />, document.getElementById("mount-point4"));
  };
  return MainApp;
});
