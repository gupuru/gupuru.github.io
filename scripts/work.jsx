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
  render: function() {
    return (
      <Col xs={12} md={4}>
        <Thumbnail style={this.props.style} onClick={this.props.onClick} alt={this.props.alt} src={this.props.src}>
          <div style={this.props.cardStyleMain}>{this.props.title}</div>
          <div style={this.props.cardStyleSub}>{this.props.desc}</div>
        </Thumbnail>
      </Col>
    );
  },
});

var Main = React.createClass({
  onClickWorks: function(url){
    window.open(url, '_blank');
  },
  render: function() {
    return (
      <Grid style={cardStyle.text}>
        <Row>
          <Content style={cardStyle.background} cardStyleMain={cardStyle.main} cardStyleSub={cardStyle.sub} title="エフプレ" desc="自分のお気に入りスポットを共有するSNSっぽいアプリです。" alt="エフプレ" src="../images/f_place.png" onClick={this.onClickWorks.bind(this, 'https://itunes.apple.com/jp/app/efupure/id995643126?mt=8')} />
          <Content style={cardStyle.background} cardStyleMain={cardStyle.main} cardStyleSub={cardStyle.sub} title="ロケモ" desc="場所を記録するメモアプリです。" alt="ロケモ" src="../images/location_memo.png" onClick={this.onClickWorks.bind(this, 'https://itunes.apple.com/jp/app/id959363067')} />
          <Content style={cardStyle.background} cardStyleMain={cardStyle.main} cardStyleSub={cardStyle.sub} title="ペットボトルロケットのシミュレーション" desc="ペットボトルロケットのシミュレーションです。 軌道は、ちゃんと計算しています。" alt="ロケットシミュレーション" src="../images/simulation.png" onClick={this.onClickWorks.bind(this, 'https://youtu.be/c8Hiur8yb-k')} />
        </Row>
        <Row>
          <Content style={cardStyle.background} cardStyleMain={cardStyle.main} cardStyleSub={cardStyle.sub} title="格子に星が入っているアクセサリーです。" desc="アクセサリーです。DMMの方で販売しています。" alt="アクセサリー" src="../images/accessories.png" onClick={this.onClickWorks.bind(this, 'http://make.dmm.com/item/13494/')} />
          <Content style={cardStyle.background} cardStyleMain={cardStyle.main} cardStyleSub={cardStyle.sub} title="ロケーションメモ" desc="「メモ」+「住所」がコンセプトのAndroidアプリです。" alt="ロケモandroid" src="../images/location_memo_android.png" onClick={this.onClickWorks.bind(this, 'https://play.google.com/store/apps/details?id=orimagi.location.pomo')} />
          <Content style={cardStyle.background} cardStyleMain={cardStyle.main} cardStyleSub={cardStyle.sub} title="今年は平成何年？" desc="平成何年かが、すぐ分かります。ただ、それだけです。" alt="年号" src="../images/nengo.png" onClick={this.onClickWorks.bind(this, 'https://play.google.com/store/apps/details?id=com.orimagi.nengo')} />
        </Row>
      </Grid>
    );
  }
});

module.exports = Work;