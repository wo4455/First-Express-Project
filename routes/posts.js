const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
// importing model from Post file to use

router.use(express.static('public'));
router.use('/css', express.static(__dirname + 'public/css'));
router.use('/js', express.static(__dirname + 'public/js'));

router.get('', (req, res) => {
    res.render('posts');
});
//

// GETS BACK ALL THE POSTS, RETURNS TO POSTMAN
router.get('/', (req, res) => {
    try {
        const posts = Post.find();
        res.json(posts);
        // returns all the posts
    } catch (err) {
        res.json({message:err})
    }
});

router.get('/specific', (req, res) => {
    res.send("This is a specific post");
});

// CREATES POST AND SUBMITS TO DB
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title, 
        description: req.body.description
        // or gets title and desc from user input?
    });
    try {
        const savedPost = post.save();
        // saving new post to database
        res.json(savedPost);
        // showing data, about the post that was saved, on postman (could be showing to site as well?)
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
// export so can activiate module in index.js
