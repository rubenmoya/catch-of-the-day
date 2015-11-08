var React = require('react');
var PropTypes = React.PropTypes;
var Helpers = require('./helpers');

var Fish = React.createClass({

  render: function() {
    var details = this.props.details;

    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name} />
        <h3 className="fish-name">
          {details.name}
          <span className="price">{Helpers.formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
      </li>
    );
  }

});

module.exports = Fish;
