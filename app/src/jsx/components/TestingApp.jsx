define(['react-with-addons','AppDispatcher','jsx!./NavBar'],
  function(React,AppDispatcher, NavBar) {

  var TestingApp = function() {
  };

  TestingApp.prototype.init = function () {
    React.render(<NavBar />,
      document.getElementById("component-test-mount-point"));
  };

  return TestingApp;
});
