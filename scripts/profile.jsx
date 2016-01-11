var React = require("react");
var ReactDOM = require("react-dom");
var Request = require("superagent");
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
  },
  image: {
    width: '150px',
    height: '150px',
    border: 'solid 3px #96d9fa'
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
  },
  lineBreak: {
    marginBottom: '20px',
    marginTop: '20px'
  }
}

var GetProfileImage = React.createClass({
  getInitialState: function() {
    return {
      imageUrl: '../images/placeholder.jpg',
      alt: 'プロフィール画像'
    };
  },
  componentDidMount: function() {
    Request
    .get(this.props.source)
    .end(function(err, res){
      var data = res.body;
      if (this.isMounted()) {
          this.setState({
            imageUrl: data.profile_image,
            alt: data.alt
          });
      }
    }.bind(this));
  },
  render: function() {
    return (
      <Image style={profileImageStyle.image} src={this.state.imageUrl} alt={this.state.alt} circle />
    );
  }
});

var ProfileImage = React.createClass({
  render: function() {
    return (
      <GetProfileImage source="http://gupuru.github.io/data/profile.json" />
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
            <p>今は、<a href="https://yamap.co.jp/page/%E4%BC%9A%E7%A4%BE%E6%A6%82%E8%A6%81%E3%83%BB%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B" target="_blank">株式会社セフリ</a>で、Androidアプリの開発をしています。</p>
            <div style={messageStyle.lineBreak}>
              <p>主に、Webやアプリ&#40;iOS, Android&#41;を作っています。</p>
              <p>最近は、UX, WordPress, Dockerとかも頑張っています。</p>
            </div>
            <div style={messageStyle.lineBreak}>
              <p>Android, iOSは、10本以上つくりました。大部分は、App StoreやGoogle playで公開しています。&#40;更新を停止しているものが多いです...&#41;</p>
              <p>技術系の<a href="http://gupuru.hatenablog.jp/" target="_blank">ブログ</a>もやっています。</p>
              <p>2014年8月から2015年の2月くらいまで、大阪で<a href="https://www.facebook.com/groups/688005591279834" target="_blank">iOSの勉強会</a>を２ヶ月に１度くらいのペースで開いていました。</p>
            </div>
            <div style={messageStyle.lineBreak}>
              <p>趣味は、映画鑑賞, 天体観測, 読書&#40;科学系, ラノベ, 漫画, 技術書&#41;です。最近は、絵を書き始めまた。 </p>
              <p>今は、福岡で一人暮らしをしています。</p>
            </div>
            <div style={messageStyle.lineBreak}>
              <p>小学生からPCを触り始め、もっとPCについて知りたいと思い、大学ではコンピュータ科学を勉強しました。&#40;大学は2014年3月に卒業しました。&#41;</p>
              <p>大学ではC, アセンブラ, Java, 組み込み, 物理などいろいろやりました。</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Profile;