const axios = require('axios');
const xml2js = require('xml2js');

const serveStories = (storiesPromise) => {
	return (req, res) => {
		storiesPromise
			.then((response) => {
				xml2js.parseString(response.data, function (err, result) {
					console.log(result);
					console.log(result.rss);
					console.log(result.rss.channel[0].item[0].description[0]);
					return result.rss.channel[0].item[0].description[0];
				});
			})
			.catch((error) => {
				console.log(error);
				return error;
			});
	};
};

const fetchStories = () => {
	const promise = axios.get('https://hacks.mozilla.org/feed/');

	return promise;
};

exports.fetchStories = fetchStories;
exports.serveStories = serveStories;
