const mongoose = require("../services/mongoose.service").mongoose;
const Schema = mongoose.Schema;

const bookSchema = new Schema(
	{
		sellerId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			require: true,
		},
		name: {
			type: String,
			require: true,
		},
		price: {
			type: Number,
			require: true,
		},
		description: {
			type: String,
		},
		tags: [String],
		image: {
			type: String,
		},
	},
	{ timestapms: true }
);

bookSchema.virtual("id").get(function () {
	return this._id.toHexString();
});

bookSchema.set("toJSON", {
	virtuals: true,
});

bookSchema.findById = function (cb) {
	return this, model("Books").find({ id: this.id }, cb);
};

const Book = mongoose.model("Books", bookSchema);

exports.createBook = (bookData) => {
	const book = new Book(bookData);
	return book.save();
};

exports.list = (perPage, page) => {
	return new Promise((resolve, reject) => {
		Book.find()
			.limit(perPage)
			.skip(perPage * page)
			.exec(function (err, books) {
				if (err) reject(err);
				else {
					const newBooks = [];
					books.forEach((book) => {
						book = book.toJSON();
						delete book._id;
						delete book.__v;
						newBooks.push(book);
					});
					resolve(newBooks);
				}
			});
	});
};

exports.findById = function (id) {
	return Book.findById(id).then((result) => {
		result = result.toJSON();
		delete result._id;
		delete result.__v;
		return result;
	});
};

exports.findByIdList = async function (ids) {
	return new Promise((resolve, reject) => {
		const books = [];
		for (let i = 0; i < ids.length; ++i) {
			Book.findById(ids[i].bookId)
				.then((book) => {
					books.push({ qty: ids[i].qty, book: book });
					if (i == ids.length - 1) resolve(books);
				})
				.catch((err) => {
					reject(err);
				});
		}
	});
};

exports.patchUser = (id, userData) => {
	return User.findOneAndUpdate(
		{
			_id: id,
		},
		userData
	);
};


exports.removeById = (userId) => {
	return new Promise((resolve, reject) => {
		Book.deleteMany({ _id: userId }, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve(err);
			}
		});
	});
};
