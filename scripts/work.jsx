var React = require("react");
var ReactDOM = require("react-dom");
var Grid = require("react-bootstrap").Grid;
var Row = require("react-bootstrap").Row;
var Grid = require("react-bootstrap").Grid;
var Thumbnail = require("react-bootstrap").Thumbnail;
var Col = require("react-bootstrap").Col;
var Button = require("react-bootstrap").Button;
var Request = require("superagent");

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
  },
  hover: {
    backgroundColor: 'rgba(255,255,255,.3)',
    height: '350px',
    paddingTop: '10px',
    position: 'relative'
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

var Content = React.createClass({
  onClickWorks: function(url){
    if (url == '' || url == undefined) {
      window.alert('取得中です。少々お待ちください。');
    } else {
      window.open(url, '_blank');
    }
  },
  render: function() {
    return (
      <Col xs={12} md={4}>
        <Thumbnail style={cardStyle.background} onClick={this.props.onClick} alt={this.props.alt} src={this.props.src} onClick={this.onClickWorks.bind(this, this.props.url)} >
          <div style={cardStyle.main}>{this.props.title}</div>
          <div style={cardStyle.sub}>{this.props.desc}</div>
        </Thumbnail>
      </Col>
    );
  },
});

var GetWorkContent = React.createClass({
  getInitialState: function() {
    return {
      works: [
        {
          isUpper: true,
          title: '取得中...',
          desc: '取得中です。少々お待ちください。',
          alt: '',
          img: '../images/placeholder.jpg',
          link: ''
        },
        {
          isUpper: false,
          title: '取得中...',
          desc: '取得中です。少々お待ちください。',
          alt: '',
          img: '../images/placeholder.jpg',
          link: ''
        }
      ]
    };
  },
  componentDidMount: function() {
    Request
    .get(this.props.source)
    .end(function(err, res){
      var data = res.body;
      if (this.isMounted()) {
          this.setState({
            works: data.works
          });
      }
    }.bind(this));
  },
  render: function() {
    var upperItems = this.state.works.map(function(work, i) {
      if (work.isUpper) {
        return (
          <Content key={i} title={work.title} desc={work.desc} alt={work.alt} src={work.img} url={work.link}/>
        );
      }
    });
    var bottomItems = this.state.works.map(function(work, i) {
      if (!work.isUpper) {
        return (
          <Content key={i} title={work.title} desc={work.desc} alt={work.alt} src={work.img} url={work.link}/>
        );
      }
    });
    return (
     <Grid style={cardStyle.text}>
        <Row>
          {upperItems}
        </Row>
        <Row>
          {bottomItems}
        </Row>
      </Grid>
    );
  }
});

var Main = React.createClass({
  render: function() {
    return (
      <GetWorkContent source="http://gupuru.github.io/data/works.json" />
    );
  }
});

module.exports = Work;