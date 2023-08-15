const mongoose = require("mongoose");
const moment = require("moment");
const ObjectId = mongoose.Types.ObjectId;

const mongoSchema = mongoose.Schema({
  id_poktan: {
    type: String,
    default: null,
  },
  nama_kelompok: {
    type: String,
    default: null,
  },
  no_register: {
    type: String,
    default: null,
  },
  tanggal_berdiri: {
    type: String,
    default: null,
  },
  kelas: {
    type: String,
    default: null,
  },
  alamat: {
    type: String,
    default: null,
  },
  ketua: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("kelola_poktan", mongoSchema);
