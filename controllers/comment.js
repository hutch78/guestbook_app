var fs = require('fs');
var path = require('path');
var commentModel = require('../models/comment');

module.exports = {
	index: function(req, res) {
		console.log('controller -- comment.index');
		var viewModel = commentModel.find(function(err, comments) {
            res.render('comments',{
            	"comments": comments,
            	title: "The Timeline",
            	isComments: true
            });
            // console.log(comments);
            console.log(comments.length + ' comments found');
        });
	},
	create: function(req, res) {

		var saveComment = function(){

			//creates the image model with details from the request (req)
			var newComment = new commentModel({
				comment: req.body.comment,
				author: req.body.author
			});

			console.log(newComment);

			//saves the image - mongoose function
			newComment.save(function(err, comment) {
				if (err) { 
					throw err; 
				} else {
					console.log('Successful Comment');
					res.redirect('/comments');
				}
			});
		}

		//  Call the function above
		saveComment();

	},
	destroy: function(req, res){

		var deleteComment = function(){



		}

	}
};