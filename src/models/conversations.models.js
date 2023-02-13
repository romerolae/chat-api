const { DataTypes } = require('sequelize');

const db = require('../utils/database');

const Conversations = db.define('conversations', {
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			len: [2, 20],
		},
	},
	createdBy: {
		type: DataTypes.UUID,
	},
	isGrouped: {
		type: DataTypes.BOOLEAN,
		default: false,
	},
	profileImage: {
		type: DataTypes.STRING,
	},
});

module.exports = Conversations;
