var repoDetails;

var stats;

function magic() {

	repoDetails = getUserAndIdFromRepoURL($('.pandorasBox input').val());

	if (!repoDetails['error']) {

		stats = getRepoStatsWithOwnerAndId(repoDetails['user'], repoDetails['id']);

		console.log(stats);

		buildingTowers();

	} else {

		alert(repoDetails['error']);

	}

	return false;

}

// Three.js making WebGL a walk in the park

var scene;
var camera;
var renderer;
var cylinder;

function buildingTowers() {

if ($('body canvas').length > 0) {
	return;
};

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );

$('body').append(renderer.domElement);

var geometry = new THREE.CylinderGeometry(5,5,5);
var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

cylinder.rotation.x = 1.57079633;
cylinder.position.z = 10;

plane = new THREE.Mesh(new THREE.PlaneGeometry(250, 250), new THREE.MeshLambertMaterial({color: 0xFFFFFF}));
scene.add(plane);

// create a point light
var pointLight =
  new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

// add to the scene
scene.add(pointLight);

camera.position.z = 50;
camera.position.y = -75;
camera.lookAt(cylinder.position);

render();

}

function render() {
	requestAnimationFrame(render);

	/*cylinder.rotation.y += 0.005;
	cylinder.rotation.z += 0.05;*/

	renderer.render(scene, camera);
}