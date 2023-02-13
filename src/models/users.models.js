//* Create a model

const { DataTypes } = require('sequelize');

const db = require('../utils/database');

//* Create the relation between the models

const Users = db.define('users', {
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
	},
	firstName: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: [2, 50],
		},
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: [2, 50],
		},
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true,
		},
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: [8, 20],
			// is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
		},
	},
	profileImage: {
		type: DataTypes.STRING,
		allowNull: true,
		validate: {
			isUrl: true,
		},
	},
	birthday: {
		type: DataTypes.DATEONLY,
		allowNull: false,
	},
	role: {
		type: DataTypes.STRING,
		defaultValue: 'normal',
	},
	isActive: {
		type: DataTypes.STRING,
		defaultValue: 'true',
	},
	isVerified: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
});

module.exports = Users;
