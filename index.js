require('dotenv').config({ silent: true })
const dash_button = require('node-dash-button');
const axios = require('axios');
const dash = dash_button(process.env.button, null, null, 'all');

dash.on("detected", function (){
	console.log("button detectteeeddd yah000");

	axios.get(process.env.volume).then(() => 	{
		console.log('volume went up yesssss');
	}).catch(error => console.error(error))
	axios.get(process.env.shuffle).then(() => 	{
		console.log('songs are shuffffledd');
	}).catch(error => console.error(error))

	axios.get(process.env.noises).then((sonos) => {
	  setTimeout(() => {
	    axios.get(process.env.playlist).then((sonos) => {
	      console.log('playing playlist')
	      axios.post(process.env.slack, {"text": process.env.message, "channel": "studio"
	    }).then(() => console.log('SENT SLACK MESSAGE')).catch(error => console.error(error))
	    }).catch(error => console.error(error))
	  }, 4000);
	}).catch(error => console.error(error))
});
