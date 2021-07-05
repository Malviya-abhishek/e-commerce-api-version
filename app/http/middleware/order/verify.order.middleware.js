const BookModel = require("../../../model/book.model");

exports.isValidOrderFields = async (req, res, next) => {
	if (!req.body) return res.sendStatus(400);

	if (
		!req.body.books ||
		!req.body.phone ||
		!req.body.address ||
		!req.body.paymentType ||
		req.body.paymentStatus
	) {
		const errors = [];
		if (!req.body.books) errors.push("Missing books field");
		if (!req.body.phone) errors.push("Missing phone field");
		if (!req.body.address) errors.push("Missing address field");
		if (!req.body.paymentType) errors.push("Missing paymentType field");
		if (req.body.paymentStatus)
			errors.push("PaymentStatus cannot included ");

		return res.status(400).send({ error: errors.join(", ") });
	} else {
		if (req.body.paymentType != "COD" && req.body.paymentType != "ONLINE")
			return res.status(400).send({ error: "Invalid payment type" });
	}

	try {
		for (let i = 0; i < req.body.books.length; ++i) {
			if (!req.body.books[i].qty || req.body.books[i].book)
				throw "Invalid order";
			req.body.books[i].qty = parseInt(req.body.books[i].qty);
			if (!req.body.books[i].qty) throw "Invalid order";
		}
	} catch (err) {
		return res
			.status(400)
			.send({ error: "Array of  qty and bookId required" });
	}

	if (req.body.books.length) {
		BookModel.findByIdList(req.body.books, res)
			.then((books) => {
				req.body.books = books;
				next();
			})
			.catch((err) => {
				return res.sendStatus(400);
			});
	} else {
		return res.sendStatus(400);
	}
};
