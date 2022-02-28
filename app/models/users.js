const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    });

module.exports = mongoose.model('users', UserScheme);