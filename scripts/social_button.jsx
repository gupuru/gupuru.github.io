var React = require("react");
var ReactDOM = require("react-dom");
var Row = require("react-bootstrap").Row;
var Grid = require("react-bootstrap").Grid;
var Col = require("react-bootstrap").Col;
var Button = require("react-bootstrap").Button;

var SocialBtn = React.createClass({
  render: function(){
    return (
      <Main/>
    );
  }
});

var style = {
  social: {
    textAlign: 'center'
  }
}


var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Grid>
          <Row>
            <Col style={style.social}  xs={4} md={4}>
              <Button bsSize="large" href="https://twitter.com/gupuru">Twitter</Button>
            </Col>
            <Col style={style.social} xs={4} md={4}>
              <Button bsSize="large" href="https://github.com/gupuru">GitHub</Button>
            </Col>
            <Col style={style.social} xs={4} md={4}>
              <Button bsSize="large" href="http://gupuru.hatenablog.jp/">Blog</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = SocialBtn;