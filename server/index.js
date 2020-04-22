let express = require('express');
let path = require('path');

let app = express();
let options = { index: 'home.html' };

app.set('port', process.env.PORT || 5000);

app.use('/', express.static(path.join(__dirname, '../public/'), options));

console.log(__dirname);

app.listen(app.get('port'), function () {
	console.log('App listening at the port 5000!');
});
