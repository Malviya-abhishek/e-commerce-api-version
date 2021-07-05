exports.splitOrder = (req, res, next) => {
	const sellerMap = {};

	req.body.books.forEach((element) => {
		if (!sellerMap[element.book.sellerId])
			sellerMap[element.book.sellerId] = [];
		sellerMap[element.book.sellerId].push({
			qty: element.qty,
			book: element.book,
		});
	});

	const orders = [];


	Object.keys(sellerMap).map((key) => {
		const order = {
			customerId: req.jwt.userId,
			sellerId: key,
			status: 0,
			books: sellerMap[key],
			phone: req.body.phone,
			address: req.body.address,
      paymentType:req.body.paymentType
		};
    console.log(sellerMap[key]);
		orders.push(order);
	});

  console.log(orders);

	req.body.orders = orders;

	next();
};
