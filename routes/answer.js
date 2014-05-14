var db = require('../models')

exports.findAll = function(req, res){

	db.Answer.findAll(
	{
		where: {
			QuestionId: req.params.question_id
		}
	})
	.success(function(answer) {
		res.json(answer);
	})
		
};

exports.create = function(req, res){

	req.body['QuestionId'] = req.params.question_id;

	db.Answer.create(req.body)
		.complete(function(err, answer) {
			res.json(answer);
	});

};

exports.update = function(req, res){

	db.Answer.find(req.params.id)
		.success(function(answer) {
			answer.updateAttributes(req.body)
			.success(function(answer) {
				res.json(answer);
			});
		});

};

exports.destroy = function(req, res){

	db.Answer.find(req.params.id)
		.success(function(answer) {
			answer.destroy()
			.success(function(answer) {
				res.status(200);
				res.end()
			});
		});
};