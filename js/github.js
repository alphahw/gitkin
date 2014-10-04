var apiBasepath = 'https://api.github.com';

function getUserAndIdFromRepoURL(url) {

	url = url.split('/');

	if (url[2] === 'github.com') {

		return {
			"id": url[4],
			"user": url[3]
		};

	} else {

		return {"error" : "That's not a GitHub URL… :("}

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
    
		buildingTowers(data);
	
	})
	.fail(function() {
    
    	alert( "error" );
	
	});	

}
