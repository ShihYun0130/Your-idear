const bodyParser = require('body-parser');
const express = require('express')
const mongoose = require('mongoose')

const Wall = require('./models/wall')
// const Post = require('./models/post')

// Create server to serve index.html
const app = express();
const cors = require('cors');
const http = require('http').Server(app)
const port = process.env.PORT || 3001


// Start server listening process.
app.listen(port, () => {
    console.log(`Server listening on port ${port}.`)
})

// Connect to mongo
mongoose.connect('mongodb+srv://shihyun:0000@cluster0-rbq78.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
})
db = mongoose.connection

// Routing
app.use(cors());
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post('/post', (req, res) => {
    // console.log('this is post /post');
    const body = req.body;
    res.send('post');
    // console.log(body);
    db.on('error', error => {
        console.log(error);
    });
    let wallName = body.wallName;
    let postId = body.postId;
    let author = body.author;
    let content = body.content;
    let time = body.time;
    const walls = db.collection("walls");
    walls.updateOne(
        { "wallName": wallName },
        { "$push": { "posts" :{postId, author, content, time}}}
   );
   console.log("post post succecfully")
});

app.post('/wall', (req, res) => {
    // console.log('this is post /wall');
    const body = req.body;
    console.log('this is body wall', body.wallDescription);
    res.send('wall successfully posted!');
    
    db.on('error', error => {
        console.log(error);
    });
    let wallName = body.wallName;
    let wallDescription = body.wallDescription;
    let postId = body.postId;
    let author = body.author;
    let content = body.content;
    let time = body.time;
    const wall = new Wall({ wallName, wallDescription, posts:[{postId, author, content, time}] } );
    wall.save( err => {
        if (err) console.error(err);
    });
});

app.get('/wall', (req, res) => {
    // console.log("get /wall");
    // console.log('query', req.query);
    db.on('error', error => {
        console.log(error);
    });
    const query = req.query;
    const wall = db.collection("walls");
    wall.findOne(query, function(err, result) {
        if (err) throw err;
        // console.log(result);
        res.send(result);
    });
});

app.get('*', (req, res)=>{
    res.sendFile('index.html', {root: './public'})
})