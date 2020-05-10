const axios = require('axios');
const xml2js = require('xml2js');

axios
	.get('https://hacks.mozilla.org/feed/')
	.then((response) => {
		xml2js.parseString(response.data, function (err, result) {
			console.log(result);
			console.log(result.rss);
			console.log(result.rss.channel[0].item[0].description[0]);
		});
	})
	.catch((error) => {
		console.log(error);
	});