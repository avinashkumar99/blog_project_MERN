const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema ({
    name: {
        type:String,
        required : true,
        trim: true,
    },
    age : {
        type:Number,

    },
    emailId: {
        type: String,
        required:true,
        unique: true,

    },
    createdAt: {
        type: Date,
        default:Date.now(),
        required:true,
    },
    bio : {
        type:String,
        required:true,
        trim:true,
    },
    password: {
        type: String,
        required:true,
    }
});

userSchema.pre('save', async function (next){
    if(!this.isModified(this.password)) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('User', userSchema);


