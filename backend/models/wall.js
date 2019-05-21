const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const Post = require('./post')

// Creating a schema, sort of like working with an ORM

const WallSchema = new Schema({
	wallName: String,
	wallDescription: String,
	// posts: [Post]
	posts: {
		author: String,
		content: String,
		time: Date
	}
});

// Creating a table within database with the defined schema
const Wall = mongoose.model('walls', WallSchema)
console.log("establish schema: wall");
// Exporting table for querying and mutating
module.exports = Wall;
