// const crypto = require('crypto');
// const jwt = require("jsonwebtoken");

// // let x = crypto.randomBytes(16);
// // let y = x.toString('base64')
// // console.log(x);
// // console.log(y);

// let salt = crypto.randomBytes(16).toString('base64');

// console.log(salt);

// let hash = crypto.createHmac("sha512", salt).digest("base64");

// let obj = {"name":"jo", "surname": "mama"};

// let token = jwt.sign( obj , "sign");

// console.log((token));

// let b = Buffer.from(hash);

// console.log(hash);

// // const crypto = require("crypto");
// // const algorithm = "aes-256-ctr";
// // const password = "keepitsecret";

// // function encryptText(text) {
// // 	const cipher = crypto.createCipher(algorithm, password);
// // 	let encrypted = cipher.update(text, "utf8", "hex");
// // 	encrypted += cipher.final("hex");
// // 	return encrypted;
// // }
// // console.log(encryptText("javascript"));

// // function decryptText(text) {
// // 	const decipher = crypto.createDecipher(algorithm, password);
// // 	let decrypted = decipher.update(text, "hex", "utf8");
// // 	decrypted += decipher.final("utf8");
// // 	return decrypted;
// // }
// // let encrypted = encryptText("javascript");
// // console.log(decryptText(encrypted));

const obj = {
	name: "qwe",
	class: "asd",
};

const key = "abhishek";

const crypto = require("crypto");

let refreshId = "this_is_id" + key;

let salt = crypto.randomBytes(16).toString("base64");

let hash = crypto.createHmac("sha512", salt).update(refreshId).digest("base64");

obj.refreshKey = salt;

console.log(typeof hash);

let b = Buffer.from(hash);

let refresh_token = b.toString("base64");

console.log("hash ", hash.length ,hash);
console.log("rf_t ", refresh_token.length ,refresh_token);


const jwt = require("jsonwebtoken");
let token = jwt.sign(obj, key);
console.log("tkn ",token);

try {
	let obj = jwt.verify(token, key);
	console.log(obj);
} catch (err) {
	console.log(err);
}


let x = "h";

let bu = Buffer.from(x);

let y = bu.toString("base64");

console.log("y", y);