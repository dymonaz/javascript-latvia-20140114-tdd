var fs = require("fs");
module.exports = function (req, res, next) {
	next('route');
};
