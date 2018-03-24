var AppActions = require('../actions/appActions');
module.exports = {
	searchMovies: function(movie){
		$.ajax({
			url: 'http://www.omdbapi.com/?s='+movie.title+'&apikey=ee9a9b23',
			dataType: 'json',
			cache: false,
			success: function(data){
				AppActions.receiveMovieResults(data.Search);

			}.bind(this),
			error: function(xhr, status, error){
				alert(error);
			}.bind(this)
		})
	}
}