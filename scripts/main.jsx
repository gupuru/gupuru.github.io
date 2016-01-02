var React = require("react");
var ReactDOM = require("react-dom");
var Header = require("./header.jsx");
var Profile = require("./profile.jsx");
var Work = require("./work.jsx");
var Footer = require("./footer.jsx");

var Main = React.createClass({
  render:function(){
    return (
    	<div>
        <Header/>
        <Profile/>
        <Work/>
        <Footer/>
    	</div>
    );
  }
});

module.exports = Main;