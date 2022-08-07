const mongoose = require("mongoose");


const eventsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Event name is Required."],
  },
  shortDescription: {
    type: String,
    required: [true, "Event description is required"],
  },
  description: {
    type: String,
    required: [true, "Event description is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  domain: {
    type: String,
    required: [true, "Event domain is required"],
  },
  department: {
    type: String,
    required: [true, "Event departement is required"],
  },
  status: {
    type: String,
    required: [true, "Event status is required"],
  },
  mode: {
    type: String,
    required: [true, "Mode of event is required"],
  },
  venue: {
    type: String,
  },
});

module.exports = mongoose.model("Events", eventsSchema);