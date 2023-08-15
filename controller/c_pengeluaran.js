const mongoose = require("mongoose");
const model = require("../model/m_pengeluaran");
const { requestResponse } = require("../setup");
const ObjectId = mongoose.Types.ObjectId;

exports.addPengeluaran = (data) =>
  new Promise((resolve, reject) => {
    try {
      model
        .create(data)
        .then(() => {
          resolve(requestResponse.common_success);
        })
        .catch((e) => {
          console.log(e);
          reject(requestResponse.common_error);
        });
    } catch (e) {
      console.log(e);
      reject(requestResponse.common_error);
    }
  });

exports.getPengeluaran = () =>
  new Promise((resolve, reject) => {
    try {
      model
        .find()
        .then((res) => {
          resolve(requestResponse.commonSuccessWithData(res));
        })
        .catch((e) => {
          console.log(e);
          reject(requestResponse.common_error);
        });
    } catch (e) {
      console.log(e);
      reject(requestResponse.common_error);
    }
  });

exports.getPengeluaranById = (id) =>
  new Promise((resolve, reject) => {
    try {
      model
        .findOne({ _id: ObjectId(id) })
        .then((res) => {
          resolve(requestResponse.commonSuccessWithData(res));
        })
        .catch((e) => {
          console.log(e);
          reject(requestResponse.common_error);
        });
    } catch (e) {
      console.log(e);
      reject(requestResponse.common_error);
    }
  });

exports.updatePengeluaran = (id, data) =>
  new Promise((resolve, reject) => {
    try {
      model
        .updateOne({ _id: ObjectId(id) }, { $set: data })
        .then(() => {
          resolve(requestResponse.common_success);
        })
        .catch((e) => {
          console.log(e);
          reject(requestResponse.common_error);
        });
    } catch (e) {
      console.log(e);
      reject(requestResponse.common_error);
    }
  });

exports.deletePengeluaran = (id) =>
  new Promise((resolve, reject) => {
    try {
      model
        .deleteOne({ _id: ObjectId(id) })
        .then(() => {
          resolve(requestResponse.common_delete);
        })
        .catch((e) => {
          console.log(e);
          reject(requestResponse.common_error);
        });
    } catch (e) {
      console.log(e);
      reject(requestResponse.common_error);
    }
  });

exports.getPengeluaranById = (id) =>
  new Promise((resolve, reject) => {
    try {
      model
        .findOne({ _id: ObjectId(id) })
        .then((res) => {
          resolve(requestResponse.commonSuccessWithData(res));
        })
        .catch((e) => {
          console.log(e);
          reject(requestResponse.common_error);
        });
    } catch (e) {
      console.log(e);
      reject(requestResponse.common_error);
    }
  });
