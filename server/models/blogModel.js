const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        trim: true,

    },
    content : {
        type: String,
        required : true,

    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'User'
    },
    tag: {
        type : [String],
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt : {
        type : Date,
    },
    likes : {
        type : Number,

    },
    comment : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]


});

module.exports = mongoose.model('Blog', blogSchema);