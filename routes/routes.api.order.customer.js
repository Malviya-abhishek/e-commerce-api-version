const AuthValidationMiddleware = require("../app/http/middleware/auth/auth.validation.middleware");
const VerifyOrderMiddleware = require("../app/http/middleware/order/verify.order.middleware");
const SplitOrderMiddleware = require("../app/http/middleware/order/split.order.middleware");

const OrderController = require("../app/http/controllers/order/order.controller");

exports.routesConfig = function (app) {
	app.post("/orders", [
		AuthValidationMiddleware.validJWTNeeded,
		VerifyOrderMiddleware.isValidOrderFields,
    SplitOrderMiddleware.splitOrder,
		OrderController.insertOrder,
	]);
	app.get("/orders/:orderId", []);
	app.get("/orders/", []);
};
