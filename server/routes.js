//pull in our controllers
var home = require('../controllers/home');
var comment = require('../controllers/comment');

module.exports.initialize = function(app, router) {

	app.get('/', home.index);
	app.get('/comments', comment.index);
	app.get('/comments/delete/:id', comment.destroy)

	app.post('/comments/create', comment.create);

};