require('dotenv').config({ silent: true })
const dash_button = require('node-dash-button');
const axios = require('axios');
const dash = dash_button(process.env.button, null, null, 'all');

dash.on("detected", function (){
	console.log("omg found");
  console.log(process.env.button);
});
