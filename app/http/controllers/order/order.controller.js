const OrderModel = require("../../../model/order.model");

exports.insertOrder = (req, res) => {
	OrderModel.createOrder(req.body.orders)
		.then((orders) => {
      const orderIds = [];
      orders.forEach(order => {
        orderIds.push(order._id);
      });
			return res.status(201).send({ orderId: orderIds });
		})
		.catch((err) => {
			return res.sendStatus(500);
		});
};
