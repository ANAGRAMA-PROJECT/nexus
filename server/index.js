const express = require('express');
const path = require('path');
const xml2js = require('xml2js');


// const https = require('https');

let app = express();
let options = { index: 'main.html' };

app.set('port', process.env.PORT || 5000);

app.use('/', express.static(path.join(__dirname, '../public/'), options));

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

console.log(__dirname);

app.listen(app.get('port'), function () {
	console.log('App listening at the port 5000!');
});
