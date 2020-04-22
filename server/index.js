var express = require ('express');
var app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.static('public'));

app.use ('/', express.static(__dirname + '/index.html'));

app.listen(app.get('port'), function () {
    console.log('App listening at the port 3000!');
});