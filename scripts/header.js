var React = require('react');
var PropTypes = React.PropTypes;

var Header = React.createClass({

  render: function() {
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day
        </h1>
        <h3 className="tagline"><span>{this.props.tag}</span></h3>
      </header>
    );
  }

});

module.exports = Header;
