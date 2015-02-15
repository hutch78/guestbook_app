var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

//*****Create and export the Comment Schema
//creating the fields we'll want to store in our database
var CommentSchema = new Schema({
	comment: { type: String },
	author: { type: String },
	timestamp: { type: Date, 'default': Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);