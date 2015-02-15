//takes the browser's request and lets us send back a page or other information
var commentModel = require('../models/comment');

module.exports = {
	index: function(req, res) {
		var viewModel = commentModel.find(function(err, comments) {

			var sorted = comments.sort('timestamp');
			// console.log('UNSORTED: ');
			// console.log(comments);
			// console.log('sorted: ');
			// console.log(sorted);

            res.render('index',{ 
            	"comments": sorted,
            	title: "Write a Message",
            	isHome: true
            });
            console.log(comments.length + ' attempted sorted comments found');
        });
		// res.render('index',viewModel);
	}
};