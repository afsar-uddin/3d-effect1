window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		f1 = 300,
		shapes = [],
		numShapes = 150;
		for( var i = 0; i < numShapes; i += 1 ) {
			shapes[i] = {
				x: utils.randomRange(-1000, 1000),
				y: utils.randomRange(-1000, 1000),
				z: utils.randomRange(0, 10000),
			};
		}
		context.translate(width / 2, height / 2);

		update();

		function update() {
			context.clearRect(-width / 2, -height / 2, width, height);
			for( var i = 0; i < numShapes; i += 1 ) {
				var shape = shapes[i],
					perspective = f1 / (f1 + shape.z);

				context.save();
				context.translate(shape.x * perspective, shape.y * perspective);
				context.scale(perspective, perspective);
				context.fillRect(-100, -100, 200, 200);
				context.restore();

				shape.z += 20;
				if(shape.z > 10000) {
					shape.z = 0;
				}
			}
			requestAnimationFrame(update);
		}
};