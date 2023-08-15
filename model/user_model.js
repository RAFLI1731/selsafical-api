const mongoose = require("mongoose");
const moment = require("moment");

const mongoSchema = mongoose.Schema({
  id_user: {
    type: String,
    default: null,
  },
  level: {
    type: Number,
    default: 3,
  },
  name: String,
  username: String,
  password: String,
  address: String,
  phone: String,
});

module.exports = mongoose.model("users", mongoSchema);
