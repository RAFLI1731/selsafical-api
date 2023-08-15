const mongoose = require("mongoose");
const moment = require("moment");
const ObjectId = mongoose.Types.ObjectId;

const mongoSchema = mongoose.Schema({
  id_wilayah: {
    type: String,
    default: null,
  },
  status_kawasan: {
    type: String,
    default: null,
  },
  jenis_tanaman: {
    type: String,
    default: null,
  },
  luas_wilayah: {
    type: String,
    default: null,
  },
  satuan: {
    type: String,
    default: null,
  },
  keterangan: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("kelola_wilayah", mongoSchema);
