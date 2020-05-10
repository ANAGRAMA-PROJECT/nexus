const express = require('express');
const path = require('path');

const app = express();
const options = { index: 'main.html' };

app.set('port', process.env.PORT || 5000);

app.use('/', express.static(path.join(__dirname, '../public/'), options));

app.listen(app.get('port'), function () {
	console.log('App listening at the port 5000!');
});
