var React = require("react");
var ReactDOM = require("react-dom");
var Header = require("./header.jsx");
var Profile = require("./profile.jsx");
var Work = require("./work.jsx");
var Footer = require("./footer.jsx");

var style = {
  main: {
    fontFamily: 'Hiragino Kaku Gothic ProN, Meiryo, MS PGothic, Sans-serif',
    backgroundColor: '#FCFEFF'
  }
}

var Main = React.createClass({
  render:function(){
    return (
    	<div style={style.main}>
            <Header/>
            <Work/>
            <Profile/>
            <Footer/>
    	</div>
    );
  }
});

module.exports = Main;