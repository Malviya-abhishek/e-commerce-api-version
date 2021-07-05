const OrderModel = require("../../../model/order.model");

exports.insertOrder = (req, res) => {
	let x = OrderModel.createOrder(req.body.orders);
  // console.log("[order controller]",x);
	// .then((result) => {
	//   console.log(result);
	// 	return res.status(201).send({ orderId: [] });
	// })
	// .catch((err) => {
	// 	return res.sendStatus(500);
	// });
		return res.status(201).send({ orderId: [] });
};
