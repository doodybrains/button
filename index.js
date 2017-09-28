require('dotenv').config({ silent: true })
const dash_button = require('node-dash-button');
const axios = require('axios');
const dash = dash_button(process.env.button, null, null, 'all');

dash.on("detected", function (){
	console.log("yesssss");

	axios.get("http://localhost:5005/playlist/%E2%9A%80%20%E2%9A%81%20%E2%9A%82%20D%20I%20C%20E%20%E2%9A%83%20%E2%9A%84%20%E2%9A%85/play").then((sonos) => {
	  setTimeout(() => {
	    axios.get("http://localhost:5005/Rodrigo/pause").then((sonos) => {
	      console.log('Success!')
				axios.post(process.env.slack, {"text": "diiiiiiice", "channel": "studio"
			}).then(() => console.log('SENT SLACK MESSAGE')).catch(error => console.error(error))
	    }).catch(error => console.error(error))
	  }, 5000);
	}).catch(error => console.error(error))
});
