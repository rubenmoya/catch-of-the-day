var React = require('react');
var PropTypes = React.PropTypes;
var H = require('./helpers');

var Order = React.createClass({

  renderOrder: function(key) {
    var fish = this.props.fishes[key];
    var count = this.props.order[key];

    if(!fish) {
      return <li key={key}>Sorry, fish no longer available!</li>
    }

    return (
      <li key={key}>
        <span>{count}</span>lbs
        {fish.name}
        <span className="price">{H.formatPrice(count * fish.price)}</span>
      </li>
    );
  },

  render: function() {
    var orderIds = Object.keys(this.props.order);
    var total = orderIds.reduce(function(prevTotal, key) {
      var fish = this.props.fishes[key];
      var count = this.props.order[key];
      var isAvailable = fish && fish.status === 'available'

      if(fish && isAvailable) {
        return prevTotal + (count * parseInt(fish.price) || 0);
      }

      return prevTotal;

    }.bind(this), 0);

    return (
      <div className="order-wrap">
        <h2 className="order-title">Your order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
            { H.formatPrice(total) }
          </li>
        </ul>
      </div>
    );
  }

});

module.exports = Order;
