var coordsX = cube.position.x;
var coordsY = cube.position.y;

var speed = 1;
var position = {x : 400, y : 50};


function movement() {
    document.addEventListener('keydown', function(e){
        if(e.key == 'ArrowLeft') {
            
            jQuery({coordsX: 0}).animate({CoordsX: speed}, {
                duration: 100,
                easing:'swing', // can be anything
                step: function() { // called on every step
                    cube.position.x -= 0.1;
                }
            });
        }
        else if (e.key == "ArrowRight") {
            //cube.position.x += speed;
            jQuery({coordsX: 0}).animate({CoordsX: speed}, {
                duration: 100,
                easing:'swing', // can be anything
                step: function() { // called on every step
                    cube.position.x += 0.1;
                }
            });
        }
        else if (e.key == "ArrowUp") {
            //cube.position.z -= speed;
            jQuery({coordsY: 0}).animate({CoordsY: speed}, {
                duration: 100,
                easing:'swing', // can be anything
                step: function() { // called on every step
                    cube.position.z -= 0.1;
                }
            });
        }
        else if (e.key == "ArrowDown") {
            //cube.position.z += speed;
            jQuery({coordsY: 0}).animate({CoordsY: speed}, {
                duration: 100,
                easing:'swing', // can be anything
                step: function() { // called on every step
                    cube.position.z += 0.1;
                }
            });
            
        }
        else {
        }
        console.log(cube.position.z + "\n" + cube.position.x)
      
    })
}
movement()