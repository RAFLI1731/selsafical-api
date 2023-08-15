const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const CustomerSchema = new Schema({
  id_customer: {
    type: String,
    default: null
  },
  namaCustomer: {
    type: String,
    default: null
  },
  alamatCustomer: {
    type: String,
    default: null
  },
  kotaCustomer: {
    type: String,
    default: null
  },
  posCustomer: {
    type: Number,
    default: null
  },
  teleponCustomer: {
    type: Number,
    default: null
  },
  emailCustomer: {
    type: String,
    default: null
  }
})

module.exports = mongoose.model('customer', CustomerSchema)
