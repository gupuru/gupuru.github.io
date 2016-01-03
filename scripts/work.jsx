var React = require("react");
var ReactDOM = require("react-dom");
var Grid = require("react-bootstrap").Grid;
var Row = require("react-bootstrap").Row;
var Grid = require("react-bootstrap").Grid;
var Thumbnail = require("react-bootstrap").Thumbnail;
var Col = require("react-bootstrap").Col;
var Button = require("react-bootstrap").Button;

var style = {
  text: {
    textAlign: 'center',
    fontSize: '2.4em',
    color: '#494B4D',
    fontWeight: 'bold',
    marginBottom: '30px'
  },
  section: {
    marginTop: '50px',
    width: '100%',
    marginLeft: '0px',
    marginRight: '0px',
    textAlign: 'center'
  }
}

var cardStyle = {
  text: {
    color: '#494B4D',
    textAlign: 'center'
  },
  background:{
    backgroundColor: '#F7FCFF',
    height: '350px',
    paddingTop: '10px',
    position: 'relative'
  },
  main: {
    marginTop: '10px',
    textAlign: 'left',
    fontSize: '1.5em',
    fontWeight: 'bold'
  },
  sub: {
    textAlign: 'left',
    fontSize: '1.0em',
    marginTop: '10px',
    marginBottom: '10px',
    wordWrap: 'break-word'
  },
  button: {
    width: '80%',
    bottom: '0',
    left: '0',
    marginTop: '10px',
    marginBottom: '10px',
    position: 'absolute'
  }
}

var Work = React.createClass({
  render: function(){
    return (
      <div style={style.section}>
        <div style={style.text}>WORKS</div>
        <Main/>
      </div>
    );
  }
});

var Main = React.createClass({
  onClickWorks: function(e, url){
    window.open(url, '_blank');
  },
  render: function() {
    return (
      <Grid style={cardStyle.text}>
        <Row>
          <Col xs={12} md={4}>
            <Thumbnail style={cardStyle.background} onClick={this.onClickWorks.bind(this, 1, 'http://gupuru.hatenablog.jp/')} alt="171x180" src="../scripts/sample.png">
              <div style={cardStyle.main}>Thumbnail label</div>
              <div style={cardStyle.sub}>Descriptionaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddaaaaaaaaaaaaaaa</div>
            </Thumbnail>
          </Col>
          <Col xs={12} md={4}>
            <Thumbnail style={cardStyle.background} onClick={this.onClickWorks.bind(this, 2, 'http://gupuru.hatenablog.jp/')} alt="171x180" src="../scripts/sample.png">
              <div style={cardStyle.main}>Thumbnail label</div>
              <div style={cardStyle.sub}>Descriptionaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddaaaaaaaaaaaaaaa</div>
            </Thumbnail>
          </Col>
          <Col xs={12} md={4}>
            <Thumbnail style={cardStyle.background} onClick={this.onClickWorks.bind(this, 3, 'http://gupuru.hatenablog.jp/')} alt="171x180" src="../scripts/sample.png">
              <div style={cardStyle.main}>Thumbnail label</div>
              <div style={cardStyle.sub}>Descriptionaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddaaaaaaaaaaaaaaa</div>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = Work;