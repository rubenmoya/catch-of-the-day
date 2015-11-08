var React = require('react');
var PropTypes = React.PropTypes;

var Header = require('./header');
var Order = require('./order');
var Inventory = require('./inventory');

var App = React.createClass({

  getInitialState: function() {
    return {
      fishes: {},
      order: {}
    };
  },

  addFish: function(fish) {
    var timestamp = (new Date()).getTime();

    this.state.fishes['fish-' + timestamp] = fish;

    this.setState({
      fishes: this.state.fishes
    });
  },

  loadSamples: function() {
    this.setState({
      fishes: require('./sample-fishes.js')
    });
  },

  render: function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tag="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    );
  }

});

module.exports = App;
