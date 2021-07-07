const mongoose = require("../services/mongoose.service").mongoose;
const Schema = mongoose.Schema;

const orderSchema = new Schema(
	{
		customerId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			require: true,
		},
		sellerId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			require: true,
		},
		status: {
			type: Number,
			default: 0,
		},
		books: [
			{
				qty: {
					type: Number,
					require: true,
				},
				book: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Book",
					require: true,
				},
			},
		],
		phone: {
			type: String,
			require: true,
		},

		address: {
			type: String,
			require: true,
		},

		paymentType: {
			type: String,
			require: true,
		},

		paymentStatus: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

orderSchema.virtual("id").get(function () {
	return this._id.toHexString();
});

orderSchema.set("toJSON", {
	virtuals: true,
});

orderSchema.findById = function (cb) {
	return this.model("Orders").find({ id: this.id }, cb);
};

const Order = mongoose.model("Orders", orderSchema);

exports.findByIdForCustomer = (id) => {
	return Order.findById(id).then((result) => {
		result = result.toJSON();
		delete result._id;
		delete result.__v;
		return result;
	});
};

exports.createOrder = (ordersData) => {
	return Order.insertMany(ordersData);
};

exports.findById = (id) =>{
	return Order.findById(id);
}
