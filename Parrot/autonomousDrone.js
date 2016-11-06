var autonomy = require('ardrone-autonomy');
var mission  = autonomy.createMission();

mission.zero();
mission.takeoff();
mission.altitude(1);
mission.go({x: 0.5, y: 0.5, z: 0});
//mission.hover(5000);
//mission.land();
// mission.takeoff();
mission.go({x: 0, y: 0, z: 1});
mission.hover(5000);
mission.land();

// client
//   .after(5000, function() {
//       this.clockwise(0.5);
//         })
// 	  .after(3000, function() {
// 	      this.stop();
// 	          this.land();
// 		    });

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
