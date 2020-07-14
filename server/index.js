const express = require('express');
const path = require('path');
const rss = require('./modules/rss.js');
const gitRepos = require('./modules/gitRepos.js');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use('/app', express.static(path.join(__dirname, '../public/')));
app.use('/app/*', express.static(path.join(__dirname, '../public/')));
app.get('/stories', rss.fetchStoriesRouter);
app.get('/gitrepos', gitRepos.fetchProjectRepos);
app.get('/', (request, response) => {
	response.redirect('/app');
});

app.use('/contact-form', (request, response) => {
	console.log(request);
});

app.listen(app.get('port'), function () {
	console.log('App listening at the port 5000!');
});
