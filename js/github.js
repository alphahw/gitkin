var apiBasepath = 'https://api.github.com';

function getUserAndIdFromRepoURL(url) {

	url = url.split('/');

	return {
		"id": url[url.length-1],
		"user": url[url.length-2]
	};

}

// Maybe not needed. Hm.
function getRepoOwnerWithIdByUser(id, user) {

	var apiEndpath = '/repos/' + user + '/' + id;

	$.ajax(apiBasepath + apiEndpath)
	.done(function(data) {
    
    	return(data['owner']['login']);
	
	})
	.fail(function() {
    
    	alert( "error" );
	
	});

}

function getRepoStatsWithOwnerAndId(owner, id) {
	
	var apiEndpath = '/repos/' + owner + '/' + id + '/stats/contributors';

	$.ajax(apiBasepath + apiEndpath)
	.done(function(data) {
    
		return ;
	
	})
	.fail(function() {
    
    	alert( "error" );
	
	});	

}
