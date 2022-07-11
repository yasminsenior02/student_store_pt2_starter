const db = require("../db");

class Store {
  static async listProducts(credentials) {
    const requiredField = [
      "id",
      "name",
      "category",
      " image ",
      "description",
      "price",
    ];
    // That method should run a SQL query that searches the
    // database for all products and returns a list of them.
  }
}

module.exports = Store;
