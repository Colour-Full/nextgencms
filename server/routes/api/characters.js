var keystone = require('keystone');

var Characters = keystone.list('Character');

/**
 * List Characters
 */
exports.list = function (req, res) {
	Characters.model.find(function (err, items) {

		if (err) return res.apiError('database error', err);

		res.apiResponse({
			characters: items,
		});

	}).limit(Number(req.query.limit));
};
