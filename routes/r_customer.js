const router = require('express').Router()
const userController = require('../controller/c_customer')

router.post('/add_customer', (req, res) => {
    userController.insertCustomer(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
router.delete("/delete_customer/:id", (req, res) => {
    userController
      .deleteUser(req.params.id)
      .then((result) => {
        res.json(result)
      })
      .catch((err) => {
        res.json(err)
      })
  })
router.get('/view_customer', (req, res) => {
    userController.getAllCustomer()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router