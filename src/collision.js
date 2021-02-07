/*
function collision()
{
  var originPoint = cube.position.clone();
	
	for (var vertexIndex = 0; vertexIndex < cube.geometry.vertices.length; vertexIndex++)
	{	
    		
		var ray = new THREE.Raycaster( cube.position, cube.geometry.vertices[vertexIndex] );
		var collisionResults = ray.intersectObjects( collidableMeshList );
		if ( collisionResults.length > 0)  
		{
      console.log("true");
      hit = true;
     }
  } 
} 
*/