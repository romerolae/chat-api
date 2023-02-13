const Users = require('../models/users.models');
const uuid = require('uuid');

const findAllUsers = async () => {
	const data = await Users.findAll({
         attributes:[ 'id', 'firstName', 'lastName', 'email'],
	});
	return data;
};

const findUsersById = async (id) => {
	const data = await Users.findOne({
		where: {
			id: id,
		},

         attributes:[ 'id', 'firstName', 'lastName', 'email'],
	});

	
	return data;
};

const createNewUser = async (userObj) => {
	const newUser = {
		id: uuid.v4(),
		firstName: userObj.firstName,
		lastName: userObj.lastName,
		email: userObj.email,
		password: userObj.password,
		profileImage: userObj.profileImage,
		birthday: userObj.birthday,
		role: userObj.role,
		isActive: userObj.isActive,
		isVerified: userObj.isVerified,
	};

	const data = await Users.create(newUser);
	return data;
};

// const createNewUser = async (obj) => {
// 	const data = await Users.create({
//         id: uuid.v4(),
// 		firstName: obj.firstName,
// 		lastName: obj.lastName,
// 		email: obj.email,
// 		password:obj.password,
// 		gender: obj.gender,
// 		birthday: obj.birthday,
// 	});
// 	return data;
// };

const updateUser = async (id, userObj) => {
	const data = await Users.update(userObj, {
		where: {
			id: id,
		},
	});
	return data[0];
};

const deleteUser = async (id) => {
	const data = await Users.destroy({
		where: {
			id: id,
		},
	});
	return data[0];
};

module.exports = {
	findAllUsers,
	findUsersById,
	createNewUser,
	updateUser,
	deleteUser,
};
