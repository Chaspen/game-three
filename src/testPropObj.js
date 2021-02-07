//floor
const plane = new THREE.PlaneBufferGeometry(20,20);
const floor = new THREE.Mesh( plane, material1 )
scene.add( floor );
floor.position.y = -0.5;
floor.rotation.x = -1.57;

//collision test object
const CollisionBoxTest = new THREE.BoxBufferGeometry();
const wireframe = new THREE.WireframeGeometry(CollisionBoxTest);
const line = new THREE.LineSegments(wireframe);
line.material.depthTest = false;
line.material.opacity = 1;
line.material.transparent = true;
scene.add( line );
line.position.x = 2;

