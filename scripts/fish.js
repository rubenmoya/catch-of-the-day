var React = require('react');
var PropTypes = React.PropTypes;
var Helpers = require('./helpers');

var Fish = React.createClass({

  onButtonClick: function() {
    var key = this.props.index;
    this.props.addToOrder(key);
  },

  render: function() {
    var details = this.props.details;
    var isAvailable = (details.status === 'available' ? true : false)
    var buttonText = (isAvailable ? 'Add to order' : 'Sold out!')

    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name} />
        <h3 className="fish-name">
          {details.name}
          <span className="price">{Helpers.formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button disabled={!isAvailable} onClick={this.onButtonClick}>{buttonText}</button>
      </li>
    );
  }

});

module.exports = Fish;
