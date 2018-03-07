var express = require('express');
var router = express.Router();
var mustache = require('mustache');
var app = express();
var cache = require('express-redis-cache')();

app.listen(8080);

app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));

router.get('/',
	cache.route(),
	function (req, res, next) {
		res.render('index', {
			locals: {
				title: 'Hello world',
				person: 'Partner'
			}
		});
		next();
	}
);

app.use(router);
module.exports = router;
