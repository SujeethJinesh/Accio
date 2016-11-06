var autonomy = require('ardrone-autonomy');
var mission  = autonomy.createMission();

goToPoint({x: 0.5, z: 0.5});

function goToPoint(coords) {
	mission.zero();
	mission.takeoff();
	mission.altitude(1);
	mission.go({x: coords.x, y: coords.z, z: 0});
	// mission.hover(1000);
	//comp vision logic
	mission.go({x: 0, y: 0, z: 1});
	mission.land();

	mission.run(function (err, result) {
    	if (err) {
        	console.trace("Oops, something bad happened: %s", err.message);
        	mission.client().stop();
        	mission.client().land();
    	} else {
        	console.log("Mission success!");
        	process.exit(0);
    	}
	});

}

// mission.run(function (err, result) {
//     	if (err) {
//         	console.trace("Oops, something bad happened: %s", err.message);
//         	mission.client().stop();
//         	mission.client().land();
//     	} else {
//         	console.log("Mission success!");
//         	process.exit(0);
//     	}
// 	});