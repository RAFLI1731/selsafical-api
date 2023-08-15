"use strict";
const auth = require("basic-auth")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const userController = require("../controller/user_controller")
var config = require("../config/config.json")
const fs = require("fs")
const uploadUtil = require("../config/uploadImg")
const fotoUser = uploadUtil.upload.single("fotoProfile")

module.exports = (router) => {
  router.get("/", (req, res) => res.end("Selsafica Api!"))

  router.post("/users/signin", (req, res) => {
    try {
      userController
        .loginUser(req.body.username, req.body.password)
        .then((result) => {
          let username = result.message
          userController
            .getProfile(username)
            .then((result) => {
              res.json(result)
            })
            .catch((err) => res.json(err))
        })
        .catch((err) => res.json(err))
    } catch (err) {
      console.log(err)
    }
  })

  router.post("/users/signup", fotoUser, (req, res) => {
    let data = req.body
    userController
      .registerUser(data)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })

router.get('/users/get_user', (req, res) => {
    userController.getAllUser()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

}
