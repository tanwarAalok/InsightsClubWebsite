const mongoose = require("mongoose");


const eventsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Event name is Required."]
    },
    description: {
        type: String,
        required: [true, "Event description is required"]
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Events", eventsSchema);