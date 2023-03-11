const mongoose = require("../models/index");
const Schema = mongoose.Schema;

const logSchema = new Schema({
  id: String,
  name: String,
  baseAmount: Number,
  caffeine: Number,
  timestamp: Date,
});

const Log = mongoose.model("log", logSchema);

export {}
module.exports = Log;

