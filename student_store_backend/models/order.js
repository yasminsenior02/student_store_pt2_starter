const db = require("../db");
const { post } = require("../routes/store");
const { BadRequestError, NotFoundError } = require("../utils/errors");

class Order {
  static async listOrdersForUser() {
    //return all orders that the authenticated user has created
  }
  static async createOrder() {
    //take a user's order and store it in the database
    const requiredFields = ["customer_id"];
    requiredFields.forEach((field) => {
      if (!post.hasOwnProperty(field)) {
        throw new BadRequestError(
          `Required field - ${field} - missing from request body`
        );
      }
    });
  }
}

module.exports = Order;
