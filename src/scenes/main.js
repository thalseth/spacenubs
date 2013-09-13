Crafty.scene("main", function() {

	var elements = [
        "src/entities/ufo.js",
        "src/entities/obstacle.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		sc['ufo'] = new Ufo();
		 sc['obstacle'] = new Obstacle();
		console.log("when everything is loaded, run the main scene");
		setInterval(myMethod, 500);
	});

	

	function myMethod( )
	{
		sc['obstacle'] = new Obstacle();
	}
});
