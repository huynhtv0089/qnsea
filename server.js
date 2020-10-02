const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

/* For parser json to endpoint */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));
/* For library css and javacript to display view */
//app.use('/static/products', express.static(path.join(__dirname,'data/products.json')));


app.get('/', function(req, res) {
  	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.get('/products', (req, res) => {
	console.log("GET /products");
	let filePath = path.join(__dirname, 'data/products.json');
	fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data) {
		if (!err) {
			//console.log('received data: ' + data);
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.write(data);
			res.end();
		} else {
			console.log(err);
		}
	});
})

app.post('/modify-products', (req, res) => {
	console.log("GET /modify-products");

	let filePath = path.join(__dirname, 'data/products.json');
	let content = JSON.stringify(req.body.data, undefined, 4);
	fs.writeFile(filePath, content, function (err) {
		if (err) throw err;
		res.send({'result': 'SUCCESS'});
	});
})

var server = app.listen((process.argv[2] || 5000), () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server is listening at http://%s:%s', host, port);
})