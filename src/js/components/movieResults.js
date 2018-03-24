var React = require ('react');
var createReactClass = require('create-react-class');

var AppActions= require('../actions/appActions');
var Stores= require('../stores/appStore');
var Movie= require('../components/movie.js');

var MovieResults = 	createReactClass({
	render: function(){
		return(
			<div className="search-results">
				<h3 className="text-center">Results: </h3>
				{
					this.props.movies.map(function(movie, i){
						return(
							<Movie movie={movie} key={i} />
						)
					})
				}
			</div>
		)
	}
});


module.exports= MovieResults;