module.exports = function(sequelize, DataTypes) {
	var Questions = sequelize.define('Question', {
		question	: 	DataTypes.STRING,
		life 		: 	DataTypes.DATE
	},
	{
		classMethods : {
			associate: function(models)
			{
				Questions.hasMany(models.Answer)
			}
		},
		paranoid : true
	})
	
	return Questions
}