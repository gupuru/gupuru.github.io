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
  container: {
    backgroundColor: '#ff0000',
    width: '100%',
    margin: '0px'
  },
  main: {
    textAlign: 'center'
  },
  sub: {
    textAlign: 'center',
    fontSize: '1.4em'
  },
  social: {
    textAlign: 'center'
  }
}

var Main = React.createClass({
  render: function() {
    return (
      <div>
          <Jumbotron style={style.container}>
            <h1 style={style.main}>@gupuru</h1>
            <div style={style.sub}>Kohei Niimi Portfolio Website</div>
            <SocialBtn/>
          </Jumbotron>
      </div>
    );
  }
});

module.exports = Header;