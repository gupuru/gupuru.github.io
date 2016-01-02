var React = require("react");
var ReactDOM = require("react-dom");
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;

var Profile = React.createClass({
  render: function(){
    return (
      <div>
        <ShortMessage/>
        <LongMessage/>
      </div>
    );
  }
});

var shortMessageStyle = {
  mainText: {
    textAlign: 'center',
    fontSize: '1.8em'
  },
  section: {
    backgroundColor: '#00ff00',
  },
  subText: {
    textAlign: 'center',
    fontSize: '1.4em'
  }
}

var longMessageStyle = {
  mainText: {
    textAlign: 'left',
    fontSize: '1.8em'
  },
  section: {
    backgroundColor: '#0000ff',
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  profileText: {
    fontSize: '1.4em'
  }
}

var ShortMessage = React.createClass({
  render: function() {
    return (
      <div style={shortMessageStyle.section}>
        <div style={shortMessageStyle.mainText}>アプリ Web 少しだけデザイン　エンジニア</div>
        <div style={shortMessageStyle.subText}>今は、株式会社セフリで、Androidアプリの開発をしています。</div>
      </div>
    );
  }
});

var LongMessage = React.createClass({
  render: function() {
    return (
      <div style={longMessageStyle.section}>
        <div style={longMessageStyle.profileText}>Profile</div>
        <Row>
          <Col xs={0} md={3}>
            <div/>
          </Col>
          <Col style={longMessageStyle.mainText} xs={12} md={6}>
            <p>主に、Webやアプリ(iOS, Android)などを作っています。</p>
            <p>最近は、UX, WordPress, Dockerにハマっています。</p>
            <p>Android, iOSは、10本以上つくりました。大部分は、App StoreやGoogle playで公開しました。(でも、更新を停止しているものが多い...)</p>
            <p>技術系の<a href="http://gupuru.hatenablog.jp/" target="_blank">ブログ</a>もやっています。</p>
            <p>2014年8月から2015年の2月くらいまで、大阪で<a href="https://www.facebook.com/groups/688005591279834" target="_blank">iOSの勉強会</a>を２ヶ月に１度くらいのペースで開いていました。</p>
            <p>趣味は、映画鑑賞, 登山, 天体観測, 科学系の本を読むことです。最近は、絵を書き始めまた。 </p>
            <p>今は、今は福岡で一人暮らしをしています。</p>
            <p>小学生からPCを触り始め、もっとPCについて知りたいと思い、大学ではコンピュータ科学を専攻しました。大学は、2014年3月に卒業しました。</p>
            <p>C, アセンブラ, Java, 組み込み, 物理などいろいろやりました。</p>
          </Col>
          <Col xs={0} md={3}>
            <div/>
          </Col>
        </Row>
      </div>
    );
  }
});

module.exports = Profile;