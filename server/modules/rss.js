const axios = require('axios');
const xml2js = require('xml2js');

const fetchStoriesRouter = (req, res) => {
	const promise = axios.get('https://hacks.mozilla.org/feed/');

	promise
		.then(response => {
			xml2js.parseString(response.data, (error, result) => {
				console.debug(result);
				res.send(result);
			});
		})
		.catch(error => {
			console.debug(error);
			res.send(error);
		});

};

exports.fetchStoriesRouter = fetchStoriesRouter;
