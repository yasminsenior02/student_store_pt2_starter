const express = require("express");
const orderRouter = express.Router();
const { requireAuthenticatedUser } = require("../middleware/security");
const orderModel = require("../models/order");

orderRouter.get("/", requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals;
    const listorders = await orderModel.listOrdersForUser(user);
    return res.status(200).json({ listorders: listorders });
  } catch (err) {
    next(err);
  }
});

orderRouter.post("/", requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals;
    const createorder = await orderModel.createOrder(user);
    return res.status(200).json({ createorder: createorder });
  } catch (err) {
    next(err);
  }
});

module.exports = orderRouter;
