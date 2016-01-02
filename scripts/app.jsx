var React = require("react");
var ReactDOM = require("react-dom");
var Col = require("react-bootstrap").Col;

var Index = React.createClass({
  render:function(){
    return (
    	<div>
    	    <Col xs={12} md={12} >
    			<h1>Hey</h1>
    		</Col>
    	</div>
    );
  }
});

ReactDOM.render(
  	<Index />,
  	document.getElementById('content')
);