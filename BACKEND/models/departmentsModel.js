const mongoose = require('mongoose');

const deptSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Departments', deptSchema);
