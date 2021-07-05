const BookController = require("../app/http/controllers/book/book.controller");
const AuthValidationMiddleware = require("../app/http/middleware/auth/auth.validation.middleware");
const AuthPermissionMiddleware = require("../app/http/middleware/auth/auth.permission.middleware");
const VerifyBookMiddleware = require("../app/http/middleware/book/verify.book.middleware");

const SELLER = parseInt(process.env.SELLER);

exports.routesConfig = function (app) {
	app.get("/books", [BookController.list]);

	app.get("/books/:bookId", [
    BookController.getById
  ]);

	app.post("/books", [
		AuthValidationMiddleware.validJWTNeeded,
		AuthPermissionMiddleware.minimumPermissionLevelRequired(SELLER),
		VerifyBookMiddleware.isValidBookFeilds,
    BookController.create
	]);

  // To do patch and delete
};
