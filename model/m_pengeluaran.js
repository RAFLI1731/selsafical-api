const mongoose = require("mongoose");
const moment = require("moment");
const ObjectId = mongoose.Types.ObjectId;

const mongoSchema = mongoose.Schema({
  idPengeluaran: {
    type: String,
    default: null,
  },
  namaBarang: {
    type: String,
    default: null,
  },
  hargaBarang: {
    type: Number,
    default: 0,
  },
  jumlahPengeluaran: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: new Date().toISOString(),
  },
});

module.exports = mongoose.model("pengluaran", mongoSchema);
