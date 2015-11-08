var React = require('react');
var PropTypes = React.PropTypes;

var Header = require('./header');
var Order = require('./order');
var Inventory = require('./inventory');
var Fish = require('./fish');

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

  renderFishes: function() {
    return Object.keys(this.state.fishes).map(function(key) {
      return <Fish key={key} index={key} details={this.state.fishes[key]} />
    }.bind(this));
  },

  render: function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tag="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {this.renderFishes()}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    );
  }

});

module.exports = App;
