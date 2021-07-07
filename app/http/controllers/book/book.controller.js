const BookModel = require("../../../model/book.model");

exports.list = (req, res) => {
	let limit =
		req.query.limit && req.query.limit <= 100
			? parseInt(req.query.limit)
			: 10;
	let page = 0;
	if (req.query) {
		if (req.query.page) {
			req.query.page = parseInt(req.query.page);
			page = Number.isInteger(req.query.page) ? req.query.page : 0;
		}
	}
	BookModel.list(limit, page).then((result) => {
		res.status(200).send(result);
	});
};

exports.create = (req, res) => {
	req.body.sellerId = req.jwt.userId;
	console.log(req.body);
	BookModel.createBook(req.body)
		.then((result) => {
			return res.status(201).send({ id: result._id });
		})
		.catch((err) => {
			res.status(503).send({ error: "Service Unavailable" });
		});
};

exports.getById = (req, res) => {
	BookModel.findById(req.params.bookId)
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((err) => {
			res.status(500).send({ err: err });
		});
};

exports.patchById = (req, res) =>{
	BookModel.patchUser(req.params.userId, req.body).then((result) => {
		res.sendStatus(204);
	});
};

exports.removeById = (req, res) => {
	BookModel.removeById(req.params.userId).then((result) => {
		res.status(204).send({});
	});
};
