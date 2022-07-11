const express = require("express");
const storeRouter = express.Router();
const storeModel = require("../models/store");

storeRouter.get("/", async (req, res, next) => {
  try {
    const products = await storeModel.listProducts(req.body);
    return res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
});

module.exports = storeRouter;
