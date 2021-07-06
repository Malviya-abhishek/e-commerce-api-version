const mongoose = require("mongoose");
const options = {
	autoIndex: false,
  poolSize: 10,
	useNewUrlParser: true,
	useUnifiedTopology: true,
};



const connectWithRetry = () => {
	console.log("MongoDB connection with retry");
	mongoose
		.connect("mongodb://localhost:27017/"+ process.env.DB_NAME, options)
		.then(() => {
			console.log("MongoDB connected");
		})
		.catch((err) => {
			console.log(
				"MongoDb connection unsuccessful, retry after 5 seconds."
			);
			setTimeout(connectWithRetry, 5000);
		});
};

connectWithRetry();

exports.mongoose = mongoose;
