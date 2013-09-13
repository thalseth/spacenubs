var speed = 250;

Crafty.scene("main", function() {

	var elements = [
        "src/entities/ufo.js",
        "src/entities/obstacle.js",
        "src/interfaces/info.js",
        "src/interfaces/points.js",
        "src/interfaces/timer.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {
		//infc['timer'] = new Timer();
		//infc['info'] = new Info();
		//infc['points'] = new Points();
		sc['ufo'] = new Ufo();
		sc['obstacle'] = new Obstacle();
		setInterval(myMethod, speed);
	});
	function myMethod( )
	{
		sc['obstacle'] = new Obstacle();
	}

	

});
var health = 3;
var timer = 0.0;

setInterval(function(){
	timer += 0.1;
	speed -= 100;
}, 100)
