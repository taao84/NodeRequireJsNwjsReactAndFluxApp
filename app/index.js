requirejs = require('requirejs');
/**
 * A fix for client-side components to work via require.
 */
global.document = window.document;
global.navigator = window.navigator;

requirejs.config({
  baseUrl: "./",
  basePath: "./",
  nodeRequire: require,
  paths: {
    // React Components
    "MainApp" : "src/jsx/MainApp",
    "NavBar" : "src/jsx/components/NavBar",
    "Counter" : "src/jsx/components/Counter",
    "FilteredList" : "src/jsx/components/FilteredList",
    "Todo" : "src/jsx/components/Todo",
    "TodoItem" : "src/jsx/components/TodoItem",
    "Locations" : "src/jsx/components/Locations",

    "jsx": "3dparty/requirejs-react-jsx/0.1.1/jsx",
    "React": "3dparty/reactjs/0.13.3/react-with-addons",
    "JSXTransformer": "3dparty/reactjs/0.13.3/JSXTransformer",
    "text": "3dparty/text/2.0.14/text",
    "flux": "3dparty/2.0.2/Flux",
    "Fluxxor": "3dparty/fluxxor/1.6.0/fluxxor",

    // App scripts
    "LocationActions": "./src/js/modules/locations/actions/LocationActions",
    "LocationStore": "./src/js/modules/locations/stores/LocationStore",
    "LocationConstants": "./src/js/modules/locations/actions/LocationConstants",
    "LocationActions": "./src/js/modules/locations/actions/LocationActions",
    "LocationsFetcher": "./src/js/modules/locations/utils/LocationsFetcher",

    "TodoActions": "./src/js/modules/todo/actions/TodoActions",
    "TodoStore": "./src/js/modules/todo/stores/TodoStore",
    "TodoConstants": "./src/js/modules/todo/actions/TodoConstants",

    "AppDispatcher": "./src/js/dispatcher/AppDispatcher",
    "AppFluxStores": "./src/js/dispatcher/AppFluxStores",
    "AppFluxActions": "./src/js/dispatcher/AppFluxActions"
  },
  shim : {
    "react": {
      "exports": "React"
    },
    "JSXTransformer": "JSXTransformer"
  },
  config: {
    jsx: {
      fileExtension: ".jsx",
      transformOptions: {
        harmony: true,
        stripTypes: false,
        inlineSourceMap: true
      },
      usePragma: false
    }
  }
});

$( document ).ready(function() {
  var nwgui = require('nw.gui');
  var nwin = nwgui.Window.get();
  nwin.show();
  nwin.maximize();
});

requirejs(["jsx!MainApp"], function(MainApp) {
  var mainApp = new MainApp();
  mainApp.init();
});
