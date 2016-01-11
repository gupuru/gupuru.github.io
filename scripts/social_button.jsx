var React = require("react");
var ReactDOM = require("react-dom");
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;

var SocialBtn = React.createClass({
  render: function(){
    return (
      <Main/>
    );
  }
});

var style = {
  button: {
    display: 'inline-block',
    padding: '.5em 1.2em',
    border: 'solid 2px #FCFEFF',
    color: '#FCFEFF',
    textDecoration: 'none',
    outline: 'none',
    marginLeft: '20px',
    marginRight: '20px',
    transition: 'all .3s'
  },
  section: {
    marginTop: '30px',
    marginBottom: '-15px',
    textAlign: 'center'
  },
  hover: {
    backgroundColor: 'rgba(255,255,255,.3)',
    borderRadius: '30px',
    display: 'inline-block',
    padding: '.5em 1.2em',
    border: 'solid 2px #FCFEFF',
    color: '#FCFEFF',
    textDecoration: 'none',
    outline: 'none',
    marginLeft: '20px',
    marginRight: '20px',
  }
}

var Main = React.createClass({
  render: function() {
    return (
      <div style={style.section}>
        <Socials url="https://twitter.com/gupuru" title="Twitter"/>
        <Socials url="https://github.com/gupuru" title="GitHub"/>
        <Socials url="http://gupuru.hatenablog.jp/" title="Blog"/>
      </div>
    );
  }
});

var Socials = React.createClass({
  getInitialState: function () {
      return {hover: false};
  },
  mouseOver: function () {
    this.setState({hover: true});
  },
  mouseOut: function () {
    this.setState({hover: false});
  },
  render: function() {
    var buttonStyle = style.button;
    if(this.state.hover) {
      buttonStyle = style.hover;
    }
    return (
      <a style={buttonStyle} onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut} onClick={this.mouseOut} href={this.props.url} target="_blank">{this.props.title}</a>
    );
  }
});

module.exports = SocialBtn;