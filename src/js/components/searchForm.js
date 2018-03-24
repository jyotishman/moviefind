var React = require ('react');
var createReactClass = require('create-react-class');

var AppActions= require('../actions/appActions');
var Stores= require('../stores/appStore');

var SearchForm = 	createReactClass({
	render: function(){
		return(
			<div className="search-form">
				<h1 className="text-center">Search for a movie</h1>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input type="text" className="form-control"  ref="title" placeholder="Enter a movie title..."/>
					</div>
					<button className="btn btn-primary btn-block">Search Movies</button>
				</form>
			</div>
		)
	},
	onSubmit: function(e){
		e.preventDefault();
		var movie={
			title: this.refs.title.value.trim()
		}
		AppActions.searchMovies(movie);
	}
});


module.exports= SearchForm;