var React = require('react');
var PropTypes = React.PropTypes;
var Helpers = require('./helpers');
var History = require("react-router").History;

var StorePicker = React.createClass({

  mixins: [History],

  handleSubmit: function(e) {
    e.preventDefault();

    var storeId = this.refs.storeId.value;

    this.history.pushState(null, '/store/' + storeId);
  },

  render: function() {
    return (
      <form className="store-selector" onSubmit={this.handleSubmit}>
        <h2>Please enter a store</h2>
        <input type="text" ref="storeId" defaultValue={Helpers.getFunName()} required />
        <input type="submit" />
      </form>
    );
  }

});

module.exports = StorePicker;
