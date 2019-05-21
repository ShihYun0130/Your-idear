const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM

const PostSchema = new Schema({
    author: String,
    content: String,
    time: Date
});

const Post = mongoose.model('posts', PostSchema)
console.log("establish schema: post");

module.export = PostSchema;