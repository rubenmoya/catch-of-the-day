var React = require('react');
var PropTypes = React.PropTypes;

var StorePicker = React.createClass({

  render: function() {
    return (
      <form className="store-selector">
        <h2>Please enter a store</h2>
        <input type="text" ref="storeId" required />
        <input type="submit" />
      </form>
    );
  }

});

module.exports = StorePicker;
