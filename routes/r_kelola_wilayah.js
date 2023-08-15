const router = require("express").Router();
const userController = require("../controller/c_kelola_wilayah");

router.post("/add_wilayah", (req, res) => {
  userController
    .insertSupplier(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

// router.post('/login', (req, res) => {
//     userController.login(req.body)
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })
router.get("/view_wilayah", (req, res) => {
  userController
    .getAllSupplier()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

router.delete("/delete_wilayah/:id", (req, res) => {
  userController
    .deleteUser(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
