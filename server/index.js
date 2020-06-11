const express = require('express');
const path = require('path');
const rss = require('./modules/rss.js');

const app = express();
const options = { index: 'main.html' };

app.set('port', process.env.PORT || 5000);

app.use('/', express.static(path.join(__dirname, '../public/'), options));

app.use('/app/*', (request, response) => {
	response.location('back');
	response.redirect('/');
});

app.get('/stories', rss.fetchStoriesRouter);
app.use('/contact-form', (request, response) => {
	console.log(request);
});

app.listen(app.get('port'), function () {
	console.log('App listening at the port 5000!');
});
