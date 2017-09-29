require('dotenv').config({ silent: true })
const dash_button = require('node-dash-button');
const axios = require('axios');
const dash = dash_button(process.env.button, null, null, 'all');

dash.on("detected", function (){
	console.log("yesssss");
	axios.get("http://localhost:5005/Rodrigo/volume/50").then(() => 	{
		console.log('pause');
	}).catch(error => console.error(error))
	axios.get("http://localhost:5005/Rodrigo/shuffle/on").then(() => 	{
		console.log('pause');
	}).catch(error => console.error(error))

	axios.get("http://localhost:5005/Rodrigo/playlist/%E2%9A%80%20%E2%9A%81%20%E2%9A%82%20I%20N%20T%20R%20O%20S%20%E2%9A%83%20%E2%9A%84%20%E2%9A%85").then((sonos) => {
	  setTimeout(() => {
	    axios.get("http://localhost:5005/Rodrigo/playlist/%E2%9A%80%20%E2%9A%81%20%E2%9A%82%20D%20I%20C%20E%20%E2%9A%83%20%E2%9A%84%20%E2%9A%85").then((sonos) => {
	      console.log('diiiiiidd it.')
	      axios.post(process.env.slack, {"text": "<!here> :game_die::game_die::game_die:  diiiiiice  :game_die::game_die::game_die:", "channel": "studio"
	    }).then(() => console.log('SENT SLACK MESSAGE')).catch(error => console.error(error))
	    }).catch(error => console.error(error))
	  }, 4000);
	}).catch(error => console.error(error))
});
