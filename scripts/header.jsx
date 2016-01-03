var React = require("react");
var ReactDOM = require("react-dom");
var Jumbotron = require("react-bootstrap").Jumbotron;
var SocialBtn = require("./social_button.jsx");

var Header = React.createClass({
  render: function(){
    return (
      <Main/>
    );
  }
});

var style = {
  section: {
    backgroundColor: '#96d9fa',
    width: '100%',
    margin: '0px'
  },
  main: {
    color: '#FCFEFF',
    textAlign: 'center',
    fontSize: '3.2em',
    fontWeight: 'bold'
  },
  sub: {
    textAlign: 'center',
    fontSize: '1.4em',
    color: '#FCFEFF',
    marginTop: '20px'
  }
}

var Main = React.createClass({
  render: function() {
    return (
      <div>
          <Jumbotron style={style.section}>
            <div style={style.main}>&#64;gupuru</div>
            <div style={style.sub}>Kohei Niimi Portfolio Website</div>
            <SocialBtn/>
          </Jumbotron>
      </div>
    );
  }
});

module.exports = Header;