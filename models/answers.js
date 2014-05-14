module.exports = function(sequelize, DataTypes) {
	var Answers = sequelize.define('Answer', {
		answer		: 	DataTypes.STRING
	},
	{
		classMethods : {
			associate: function(models)
			{
				Answers.belongsTo(models.Question)
				Answers.hasMany(models.Vote)
			}
		},
		paranoid : true
	})
	
	return Answers
}