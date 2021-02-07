

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const player = new THREE.BoxBufferGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material1 = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
var cube = new THREE.Mesh( player, material );
scene.add( cube );

camera.position.z = 5;
camera.position.y = 3;
camera.rotation.x = -0.3;












function animate(time) {
	requestAnimationFrame( animate );
    renderer.render( scene, camera );

}

animate();





