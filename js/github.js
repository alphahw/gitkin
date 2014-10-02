var apiBasepath = 'https://api.github.com';

function splitRepoURLIntoUserAndID(url) {

	url = url.split('/');

	return {
		"id": url[url.length()-1],
		"user": url[url.length()-2]
	};

}

function getRepoWithIDByUser(id, user) {

	var apiEndpath = '/repos/' + user + '/' + id;

	$.ajax(apiBasepath + apiEndpath)
	.done(function() {
    
    	alert( "success" );
	
	})
	.fail(function() {
    
    	alert( "error" );
	
	})
	.always(function() {
    
    	alert( "complete" );
	
	});

}