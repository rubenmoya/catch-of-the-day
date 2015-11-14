var React = require('react');
var PropTypes = React.PropTypes;
var AddFishForm = require('./add-fish-form');

var Inventory = React.createClass({

  renderInventory: function(key) {
    var linkState = this.props.linkState;
    return (
      <div className="fish-edit" key={key}>
        <input type="text" valueLink={linkState('fishes.' + key +'.name')} />
        <input type="text" valueLink={linkState('fishes.' + key +'.price')} />
        <select valueLink={linkState('fishes.' + key +'.status')}>
          <option value="unavailable">Sold out!</option>
          <option value="available">Fresh!</option>
        </select>
        <textarea valueLink={linkState('fishes.' + key +'.desc')}></textarea>
        <input type="text" valueLink={linkState('fishes.' + key +'.image')} />
        <button>Remove Fish</button>
      </div>
    )
  },

  render: function() {
    return (
      <div>
        <h2>Inventory</h2>

        {Object.keys(this.props.fishes).map(this.renderInventory)}

        <AddFishForm {...this.props}/>
        <button onClick={this.props.loadSamples}>Load sample fishes</button>
      </div>
    );
  }

});

module.exports = Inventory;
