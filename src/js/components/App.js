var React = require ('react');
var createReactClass = require('create-react-class');

var AppActions= require('../actions/appActions');
var AppStore = require('../stores/appStore');
var SearchForm= require('../components/searchForm.js');
var MovieResults= require('../components/movieResults.js');

function getAppState(){
	return{
		movies: AppStore.getMovieResults()
	}
}

var App = 	createReactClass({
	getInitialState: function(){
		return getAppState();
	},
	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},
	render: function(){
		if (this.state.movies=='') {
			var movieResults= '';
		}
		else{
			var movieResults=<MovieResults movies={this.state.movies}/>
		}
		return(
			<div>
				<SearchForm />
				{movieResults }
			</div>
		)
	},
	_onChange: function(){
		this.setState(getAppState());
	}
});


module.exports= App;