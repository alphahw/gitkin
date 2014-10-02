var apiBasepath = 'https://api.github.com';

function splitRepoURLIntoUserAndID(url) {

	url = url.split('/');

	return {
		"id": url[url.length-1],
		"user": url[url.length-2]
	};

}

// Maybe not needed. Hm.
function getRepoOwnerWithIDByUser(id, user) {

	var apiEndpath = '/repos/' + user + '/' + id;

	$.ajax(apiBasepath + apiEndpath)
	.done(function(data) {
    
    	console.log(data['owner']['login']);
	
	})
	.fail(function() {
    
    	alert( "error" );
	
	});

}

function getRepoStatsWithOwnerAndID(owner, id) {
	
	var apiEndpath = '/repos/' + owner + '/' + id + '/stats/contributors';

	$.ajax(apiBasepath + apiEndpath)
	.done(function(data) {
    
    	console.log(data);
	
	})
	.fail(function() {
    
    	alert( "error" );
	
	});	

}
