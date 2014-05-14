var db = require('../models')

exports.findAll = function(req, res){

	db.Question.find(
	{ 
		where: { 
			id: req.params.question_id 
		}, 
		include: [{ 
			model: db.Answer, 		// Get all associated answers
			include: [{
				model: db.Vote 		// Get all votes associated to answers
			}]
		}]
	})
	.error(function() {})			// If there is no result, send to 404
	.success(function(question) {
		res.json(question) 			// Return model as JSON
	});
		
};

exports.create = function(req, res){

	req.body['AnswerId'] = req.params.answer_id;

	db.Vote.create(req.body)
		.complete(function(err, vote) {
			res.json(vote);
		});

};
