var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var StorePicker = require('./store-picker');
var App = require('./app');
var NotFound = require('./not-found')


var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
)


ReactDOM.render(routes, document.querySelector('#main'))
