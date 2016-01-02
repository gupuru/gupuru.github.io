var React = require("react");
var ReactDOM = require("react-dom");
var Row = require("react-bootstrap").Row;
var Grid = require("react-bootstrap").Grid;
var Col = require("react-bootstrap").Col;
var Button = require("react-bootstrap").Button;

var style = {
  text: {
    textAlign: 'center',
    fontSize: '1.4em'
  },
  contacts: {
    textAlign: 'center'
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
      <div>
        <p style={style.text}>CONTACTS</p>
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
              <Button bsSize="large" href="https://twitter.com/gupuru">Twitter</Button>
            </Col>
            <Col style={style.contacts} xs={6} md={6}>
              <Button bsSize="large" href="https://github.com/gupuru">GitHub</Button>
            </Col>
          </Row>
          <Row>
            <Col style={style.contacts} xs={6} md={6}>
              <Button bsSize="large" href="mailto:origami.magic789@gmail.com">Mail</Button>
            </Col>
            <Col style={style.contacts} xs={6} md={6}>
              <Button bsSize="large" href="http://gupuru.hatenablog.jp/">Blog</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});


module.exports = Footer;