define(function(React) {
  var React = requirejs('React');

  var NavBar = React.createClass({
    render : function() {
      return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" aria-expanded="false">

                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Demo App - Reactjs, Fluxxor, Bootstrap</a>
            </div>

            <div id="navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="index.html">Home</a></li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  });

  return NavBar;
})

/*
*/
