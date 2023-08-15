const uploadConf = require("../config/uploadImg");
const fields = uploadConf.upload.single("foto");
const controller = require("../controller/c_pengeluaran");
const detail = require("../controller/detail/c_detail_pengeluaran");

module.exports = (router) => {
  router.post("/pengeluaran/add", (req, res) => {
    // console.log(req.body);
    controller
      .addPengeluaran(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.get("/pengeluaran/get", (req, res) => {
    controller
      .getPengeluaran()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.get("/pengeluaran/getbyid/:id", (req, res) => {
    controller
      .getPengeluaranById(req.params.id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.put("/pengeluaran/update/:id", fields, (req, res) => {
    let newBody = req.body;
    let foto = uploadConf.cekNull(req.file);
    if (foto !== null) {
      newBody.foto_product = foto;
    }
    controller
      .updatePengeluaran(req.params.id, newBody)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.delete("/pengeluaran/delete/:id", (req, res) => {
    controller
      .deletePengeluaran(req.params.id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.get("/pengeluaran/detail", (req, res) => {
    detail
      .getAllDetailPengeluaran()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.get("/pengeluaran/detail/:id", (req, res) => {
    detail
      .getDetailPengeluaranById(req.params.id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
