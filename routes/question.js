var db = require('../models')

exports.findAll = function(req, res){

	db.Question.findAll()
		.success(function(question) {
			res.json(question);
		})
		
};

exports.findById = function(req, res){

	db.Question.find(
	{
		where: { id: req.params.id }, 
		include: [{ model: db.Answer }]
	})
	.success(function(question) {
		res.json(question)
	});

};

exports.create = function(req, res){

	db.Question.create(req.body)
		.complete(function(err, question) {
			res.json(question);
		});

};

exports.update = function(req, res){

	db.Question.find(req.params.id)
		.success(function(question) {
			question.updateAttributes(req.body)
			.success(function(question) {
				res.json(question);
			});
		});

};

exports.destroy = function(req, res){

	db.Question.find(req.params.id)
		.success(function(question) {
			question.destroy()
			.success(function(question) {
				res.status(200);
				res.end()
			});
		});
};