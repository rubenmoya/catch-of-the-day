var React = require('react');
var PropTypes = React.PropTypes;
var AddFishForm = require('./add-fish-form');

var Inventory = React.createClass({

  render: function() {
    return (
      <div>
        <h2>Inventory</h2>
        <AddFishForm {...this.props}/>
      </div>
    );
  }

});

module.exports = Inventory;
