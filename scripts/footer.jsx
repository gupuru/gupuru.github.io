var React = require("react");
var ReactDOM = require("react-dom");
var Row = require("react-bootstrap").Row;
var Grid = require("react-bootstrap").Grid;
var Col = require("react-bootstrap").Col;

var style = {
  text: {
    textAlign: 'center',
    fontSize: '2.4em',
    color: '#FCFEFF',
    fontWeight: 'bold',
    marginBottom: '30px',
    paddingTop: '40px'
  },
  contacts: {
    textAlign: 'center'
  },
  section: {
    backgroundColor: '#6699CC',
    marginTop: '50px'
  },
  button: {
    display: 'inline-block',
    padding: '.5em .5em',
    width: '130px',
    border: 'solid 2px #FCFEFF',
    color: '#FCFEFF',
    textDecoration: 'none',
    outline: 'none',
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '30px',
    transition: 'all .3s'
  },
  hover: {
    backgroundColor: 'rgba(255,255,255,.3)',
    borderRadius: '30px',
    display: 'inline-block',
    padding: '.5em .5em',
    width: '130px',
    border: 'solid 2px #FCFEFF',
    color: '#FCFEFF',
    textDecoration: 'none',
    outline: 'none',
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '30px'
  }
}

var Footer = React.createClass({
  render: function(){
    return (
      <Main/>
    );
  }
});

var Main = React.createClass({
  render: function() {
    return (
      <div style={style.section}>
        <div style={style.text}>CONTACTS</div>
        <Contacts/>
      </div>
    );
  }
});

var Contacts = React.createClass({
  render: function() {
    return (
      <div>
        <Grid>
          <Row>
            <Col style={style.contacts}  xs={6} md={6}>
              <Twitter/>
            </Col>
            <Col style={style.contacts} xs={6} md={6}>
              <GitHub/>
            </Col>
          </Row>
          <Row>
            <Col style={style.contacts} xs={6} md={6}>
              <Blog/>
            </Col>
            <Col style={style.contacts} xs={6} md={6}>
              <Mail/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

var Mail = React.createClass({
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
      <a style={buttonStyle} onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut} href="mailto:origami.magic789@gmail.com">Mail</a>
    );
  }
});

var Twitter = React.createClass({
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
      <a style={buttonStyle} onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut} href="https://twitter.com/gupuru" target="_blank">Twitter</a>
    );
  }
});

var GitHub = React.createClass({
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
      <a style={buttonStyle} onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut} href="https://github.com/gupuru" target="_blank">GitHub</a>
    );
  }
});

var Blog = React.createClass({
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
      <a style={buttonStyle} onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut} href="http://gupuru.hatenablog.jp/" target="_blank">Blog</a>
    );
  }
});


module.exports = Footer;