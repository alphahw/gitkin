var repoDetails;

var stats;

function magic() {

	repoDetails = getUserAndIdFromRepoURL($('.pandorasBox input').val());

	if (!repoDetails['error']) {

		getRepoStatsWithOwnerAndId(repoDetails['user'], repoDetails['id']);

	} else {

		alert(repoDetails['error']);

	}

	return false;

}

// Three.js making WebGL a walk in the park

// "Constants"/helpers/presets
var radiansPerDegree = Math.PI / 180; // Calculate radians per degree for less painful rotation et al

var towerBlockHeight = 10; // Default preset for how high tower building blocks (aka cylinders) should be

var radiusSegments = 36; // Default preset for how round tower building blocks (aka cylinders) should be

// Three.js requisites
var scene, camera, renderer;

function buildingTowers(stats) {

	// Return false if we're already showing a visualisation (probably not needed later on when we get rid of showing the input after visualizing)

	if ($('body canvas').length > 0) {
		return;
	};

	// Set the scene

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

	renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setSize( window.innerWidth, window.innerHeight );

		// Add a plane to put the towers on

	$('body').append(renderer.domElement);

	plane = new THREE.Mesh(new THREE.PlaneGeometry(2500, 2500), new THREE.MeshBasicMaterial({color: 0xf0f0f0}));
	scene.add(plane);

	// And now… actual tower construction time!

	// Set up a repo master group to host all our towers

	var repoGroup = new THREE.Object3D;

	// Looping through every authors' stats in what GitHub has returned for the repo

	var authorCounter = 0;

	while (authorCounter < stats.length) {

		// A new group per tower, added to the main repo group

		var tower = new THREE.Object3D;

		// Loop through all weeks this author has been a contributor to the repo, adding a building block if they've been active that week
		

		// Tower block			

		var geometry = new THREE.CylinderGeometry(5, 5, 5, radiusSegments);
		var material = new THREE.MeshLambertMaterial( { color: 0xf0f0f0 } );
		cylinder = new THREE.Mesh( geometry, material );

		cylinder.rotation.x = 90*radiansPerDegree;

	authorCounter++;

	}

	// Add repo master group to the scene

	scene.add(repoGroup);


	// create a point light
	var pointLight =
	  new THREE.PointLight(0xFFFFFF);

	// set its position
	pointLight.position.x = 50;
	pointLight.position.y = -50;
	pointLight.position.z = 100;

	// add to the scene
	scene.add(pointLight);

	camera.position.z = 50;
	camera.position.y = -75;
	camera.lookAt(cylinder.position);

	render();

}

function render() {
	requestAnimationFrame(render);

	renderer.render(scene, camera);
}