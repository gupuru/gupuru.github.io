var React = require("react");
var ReactDOM = require("react-dom");
var Grid = require("react-bootstrap").Grid;
var Row = require("react-bootstrap").Row;
var Grid = require("react-bootstrap").Grid;
var Thumbnail = require("react-bootstrap").Thumbnail;
var Col = require("react-bootstrap").Col;
var Button = require("react-bootstrap").Button;

var style = {
  worksText: {
    textAlign: 'center',
    fontSize: '1.4em'
  },
  section: {
    backgroundColor: '#ff0000'
  }
}

var workStyle = {
  main: {
    textAlign: 'left',
    fontSize: '1.4em'
  },
  sub: {
    textAlign: 'left',
    fontSize: '1.4em'
  },
  button: {
    width: '100%'
  }
}

var Work = React.createClass({
  render: function(){
    return (
      <div style={style.section}>
        <div style={style.worksText}>Works</div>
        <Main/>
      </div>
    );
  }
});

var Main = React.createClass({
  render: function() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={4}>
            <Thumbnail alt="171x180" src="../scripts/sample.png">
              <h3 style={workStyle.main}>Thumbnail label</h3>
              <p style={workStyle.sub}>Description</p>
              <Button style={workStyle.button}>ぼたん</Button>
            </Thumbnail>
          </Col>
          <Col xs={12} md={4}>
            <Thumbnail alt="171x180" src="../scripts/sample.png">
              <h3 style={workStyle.main}>Thumbnail label</h3>
              <p style={workStyle.sub}>Description</p>
              <Button style={workStyle.button}>ぼたん</Button>
            </Thumbnail>
          </Col>
          <Col xs={12} md={4}>
            <Thumbnail alt="171x180" src="../scripts/sample.png">
              <h3 style={workStyle.main}>Thumbnail label</h3>
              <p style={workStyle.sub}>Description</p>
              <Button style={workStyle.button}>ぼたん</Button>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = Work;