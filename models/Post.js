const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
// creating schema for posts

module.exports = mongoose.model('Posts', postSchema);
// exporting the model, giving it a name, and saying it should use the PostSchema
// able to import model in posts.js to create new posts for router
