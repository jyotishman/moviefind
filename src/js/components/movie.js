var React = require ('react');
var createReactClass = require('create-react-class');

var AppActions= require('../actions/appActions');
var Stores= require('../stores/appStore');

var Movie = 	createReactClass({
	render: function(){
		return(
			<div className="well">
				{this.props.movie.Title}
			</div>
		)
	}
});


module.exports= Movie;