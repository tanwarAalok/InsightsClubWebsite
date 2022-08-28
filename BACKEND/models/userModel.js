const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'invalid username'], // username should be only alphanumeric
        index: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'invalid email'],
        index: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String, 
    },
    verified: {
        type: Boolean,
        default: false,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Departments',
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    },
    isCoAdmin: {
        type: Boolean,
        default: false,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Users', userSchema);
