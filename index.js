"use strict";
const express = require("express");
const app = express();
const logger = require("morgan");
const router = express.Router({ mergeParams: true });
const port = process.env.PORT || 5050;
const path = require("path");
const http = require("http");
const server = http.createServer(app);
// const member createServer(app)
const setUp = require("./setup");
const moment = require("moment-timezone");
const cors = require("cors");
require("./routes/users")(router);
require("./routes/r_kategori_jenis")(router);
require("./routes/r_product")(router);
require("./routes/r_penjualan")(router);
require("./routes/r_pembelian")(router);
require("./routes/r_pengeluaran")(router);
app.use(express.static("statics"));
app.use("/statics", express(path.join(__dirname, "statics")));
app.use(cors());
app.options("*", cors());
app.use(
  express.urlencoded({
    enableTypes: ["json", "form"],
    extended: true,
  })
);
app.use(
  express.json({
    extended: true,
  })
);
app.use(logger("dev"));
// Jagan di koding, more apps show adventure cread database and member git aset
// member show up panel Dinas pariwisata bandar lampung

app.use("/", router);
app.use("/customer", require("./routes/r_customer"));
app.use("/supplier", require("./routes/r_supplier"));
app.use("/wilayah", require("./routes/r_kelola_wilayah"));
app.use("/poktan", require("./routes/r_kelola_poktan"));
server.listen(port);
server.on("listening", onListening);

async function onListening() {
  try {
    console.log("try to listen...");
    var addr = server.address();
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    setUp.dbConnect();
    console.log("Listening on " + bind);
  } catch (error) {
    console.log(error);
    console.log("listen failed, try to reconnect in 5 secs...");
    setTimeout(function() {
      onListening();
    }, 5000);
  }
}
