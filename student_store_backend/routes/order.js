const express = require("express");
const orderRouter = express.Router();
const orderModel = require("../models/order");

orderRouter.get("/", async (req, res, next) => {
  try {
    const listorders = await orderModel.listOrdersForUser(req.body);
    return res.status(200).json({ listorders });
  } catch (err) {
    next(err);
  }
});

orderRouter.post("/", async (req, res, next) => {
  try {
    const createorder = await orderModel.createOrder(req.body);
    return res.status(200).json({ createorder });
  } catch (err) {
    next(err);
  }
});

module.exports = orderRouter;
