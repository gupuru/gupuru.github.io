var React = require("react");
var ReactDOM = require("react-dom");
var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Image = require("react-bootstrap").Image;

var Profile = React.createClass({
  render: function(){
    return (
      <LongMessage/>
    );
  }
});

var profileImageStyle = {
  main: {
    textAlign: 'center',
    marginBottom: '30px'
  }
}

var messageStyle = {
  textSection:{
    textAlign: 'center'
  },
  mainText: {
    textAlign: 'left',
    fontSize: '1.2em',
    margin: '0 auto',
    width: '80%',
    color: '#494B4D',
    wordWrap: 'break-word'
  },
  profileText: {
    textAlign: 'center',
    fontSize: '2.4em',
    color: '#494B4D',
    fontWeight: 'bold',
    marginBottom: '30px',
    marginTop: '50px'
  }
}

var ProfileImage = React.createClass({
  render: function() {
    return (
      <Image src="../scripts/sample.png" circle />
    );
  }
});

var LongMessage = React.createClass({
  render: function() {
    return (
      <div>
        <div style={messageStyle.profileText}>PROFILE</div>
        <div style={profileImageStyle.main}>
          <ProfileImage/>
        </div>
        <div style={messageStyle.textSection}>
          <div style={messageStyle.mainText}>
            <p>今は、株式会社セフリで、Androidアプリの開発をしています。</p>

            <p>主に、Webやアプリ(iOS, Android)などを作っています。</p>
            <p>最近は、UX, WordPress, Dockerにハマっています。</p>

            <p>Android, iOSは、10本以上つくりました。大部分は、App StoreやGoogle playで公開しました。(でも、更新を停止しているものが多い...)</p>
            <p>技術系の<a href="http://gupuru.hatenablog.jp/" target="_blank">ブログ</a>もやっています。</p>
            <p>2014年8月から2015年の2月くらいまで、大阪で<a href="https://www.facebook.com/groups/688005591279834" target="_blank">iOSの勉強会</a>を２ヶ月に１度くらいのペースで開いていました。</p>
            <p>趣味は、映画鑑賞, 登山, 天体観測, 科学系の本を読むことです。最近は、絵を書き始めまた。 </p>
            <p>今は、今は福岡で一人暮らしをしています。</p>
            <p>小学生からPCを触り始め、もっとPCについて知りたいと思い、大学ではコンピュータ科学を専攻しました。大学は、2014年3月に卒業しました。</p>
            <p>C, アセンブラ, Java, 組み込み, 物理などいろいろやりました。</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Profile;