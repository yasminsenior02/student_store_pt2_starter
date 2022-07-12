const db = require("../db");
const { post } = require("../routes/store");
const { BadRequestError, NotFoundError } = require("../utils/errors");

class Order {
  static async listOrdersForUser() {
    //return all orders that the authenticated user has created
    const results = await db.query(
      `
       SELECT orders.id AS "orderId",
              orders.customer_id AS "customerId",
              order_details.quantity AS "quantity",
              products.name AS "name",
              products.price AS "price"
       FROM orders
       JOIN order_details ON orders.id = order_details.order_id
       JOIN products ON products.id = order_details.product_id
       WHERE customer_id = (SELECT id FROM users WHERE email = $1);
      `,
      [user.email]
    );

    return results.rows;
  }
  static async createOrder({ order, user }) {
    //take a user's order and store it in the database
    //     const requiredFields = ["customer_id"];
    //     requiredFields.forEach((field) => {
    //       if (!post.hasOwnProperty(field)) {
    //         throw new BadRequestError(
    //           `Required field - ${field} - missing from request body`
    //         );
    //       }
    //     });
    //   }
    // }
    const result = await db.query(
      `
  
  INSERT INTO orders (customer_id)
  VALUES((SELECT id FROM users WHERE email = $1))
  RETURNING id,
            customer_id,
            created_at;
  `,
      [user.email]
    );

    var orderId = result.rows[0].id;

    order.forEach((element) => {
      const result = db.query(
        `
      INSERT INTO order_details (order_id, product_id, quantity)
      VALUES($1,$2,$3)
      RETURNING order_id,
                product_id,
                quantity;
      `,
        [orderId, element.id, element.quantity]
      );
    });

    return result.rows;
  }
}

module.exports = Order;
