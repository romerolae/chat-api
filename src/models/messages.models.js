const { DataTypes } = require('sequelize');

const db = require('../utils/database');
const Participants = require('./participants.models');

const Messages = db.define('messages', {
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
	},
	participantId: {
		type: DataTypes.UUID,
		allowNull: false,
		references: {
			key: 'id',
			model: Participants,
		},
	},
	content: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	status: {
		type: DataTypes.BOOLEAN,
		default: 'Sent',
	},
});

module.exports = Messages;
