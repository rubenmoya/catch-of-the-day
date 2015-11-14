var React = require('react');
var PropTypes = React.PropTypes;

var Header = require('./header');
var Order = require('./order');
var Inventory = require('./inventory');
var Fish = require('./fish');

var Rebase = require('re-base');
var base = Rebase.createClass('https://catch-of-the-day-rm.firebaseio.com/');

var Catalyst = require('react-catalyst');

var App = React.createClass({

  mixins: [Catalyst.LinkedStateMixin],

  getInitialState: function() {
    return {
      fishes: {},
      order: {}
    };
  },

  componentDidMount: function() {
    base.syncState(this.props.params.storeId + '/fishes', {
      context: this,
      state: 'fishes'
    });

    var localStorageRef = localStorage.getItem('order-' + this.props.params.storeId);

    if(localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  },

  componentWillUpdate: function(nextProps, nextState) {
    localStorage.setItem('order-' + this.props.params.storeId, JSON.stringify(nextState.order));
  },

  addToOrder: function(key) {
    this.state.order[key] = this.state.order[key] + 1 || 1
    this.setState({
      order: this.state.order
    });
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
      return <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>
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
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory linkState={this.linkState} fishes={this.state.fishes} addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    );
  }

});

module.exports = App;
