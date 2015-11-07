var React = require('react');
var PropTypes = React.PropTypes;

var Header = require('./header');
var Order = require('./order');
var Inventory = require('./inventory');

var App = React.createClass({

  render: function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tag="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }

});

module.exports = App;
