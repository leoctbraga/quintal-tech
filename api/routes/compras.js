const express = require("express");
const router = express.Router();
const Compra = require("../models/Compra");
const connect = require("../db/Connect");

router.post("/compras", (req, res) => {
  connect();
  const compra = new Compra(req.body);
  compra.totalValue = compra.unitValue * compra.amount;
  compra
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ message: err.message }));
});

module.exports = router;
