module.exports = function(sequelize, DataTypes) {
	var Votes = sequelize.define('Vote', {
		user_ip 	: 	DataTypes.STRING(15),
		user_token	: 	DataTypes.STRING
	},{
		classMethods : {
			associate: function(models)
			{
				Votes.belongsTo(models.Answer)
			}
		},
		paranoid : true
	})
	return Votes
}