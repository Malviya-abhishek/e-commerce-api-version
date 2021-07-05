require("dotenv").config();
const express = require("express");
const app = express();

const AuthRoutes = require("./routes/routes.api.auth");
const UserRoutes = require("./routes/routes.api.user");
const BookRoutes = require("./routes/routes.api.book");
const OrderRoutesCustomer = require("./routes/routes.api.order.customer");
const OrderRoutesSeller = require("./routes/routes.api.order.seller");

app.use(function (req, res, next) {
	if (req.method === "OPTIONS") {
		return res.sendStatus(200);
	} else {
		next();
	}
});

app.use(express.json());
AuthRoutes.routesConfig(app);
UserRoutes.routesConfig(app);
BookRoutes.routesConfig(app);
OrderRoutesCustomer.routesConfig(app);
OrderRoutesSeller.routesConfig(app);

app.listen(process.env.PORT, function () {
	console.log("Listing at port %s", process.env.PORT);
});
