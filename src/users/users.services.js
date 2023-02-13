const userControllers = require('./users.controllers');
const { success, error } = require('../utils/handleResponses');

const getAllusers = (req, res) => {
	userControllers
		.findAllUsers()
		.then((data) => {
			if (data) {
				success({
					res,
					data,
					status: 200,
					message: 'All users shown successfully',
				});
			} else {
				error({
					res,
					status: 400,
					message: 'There was a problem while fetching all users',
				});
			}
		})
		.catch((err) => {
			error({
				res,
				status: 404,
				message: err.message,
			});
		});
};

const getUserById = (req, res) => {
	const id = req.params.id;
	userControllers
		.findUsersById(id)
		.then((data) => {
			if (data) {
				success({
					res,
					data,
					status: 200,
					message: `User with ${id}`,
				});
			} else {
				error({
					res,
					status: 404,
					message: `User with Id:${id} not found`,
				});
			}
		})
		.catch((err) => {
			error({
				res,
				status: 400,
				message: err.message,
			});
		});
};

const postUser = (req, res) => {
	const { firstName, lastName, email, password, birthday } = req.body;
	// const userObj = req.body;
	userControllers
		.createNewUser({ firstName, lastName, email, password, birthday })
		.then((data) => {
			if (data) {
				success({
					res,
					data,
					status: 201,
					message: 'User created successfully',
				});
			} else {
				error({
					res,
					status: 404,
					message: 'User could not be found',
				});
			}
		})
		.catch((err) => {
			error({
				res,
				status: 400,
				message: err.message,
				fields: {
					firstName: 'String',
					lastName: 'String',
					email: 'example@example.com',
					password: 'String',
					birthday: 'YYYY/MM/DD',
				},
			});
		});
};

// const postUser = (req, res) => {
// 	const userObj = req.body;
// 	userControllers
// 		.createNewUser(userObj)
// 		.then( (data) => {
// 			res.status(201).json(data);
// 		})
// 		.catch((err) => {
// 			res.status(400).json({
// 				message: err.message,
// 				fields: {
// 					firstName: 'String',
// 					lastName: 'String',
// 					email: 'example@example.com',
// 					password: 'String',
// 					gender: 'String',
// 					birthday: 'YYYY/MM/DD',
// 				},
// 			});
// 		});
// };

const deleteUser = (req, res) => {
	const id = req.params.id;
	userControllers
		.deleteUser(id)
		.then((data) => {
			if (data) {
				success({
					status: 204,
					message: `User with Id:${id}`,  //? I have a question 
				});
			} else {
				error({
					res,
					status: 404,
					message: `User with Id:${id} deleted successfully`,
				});
			}
		})
		.catch((err) => {
			error({
				res,
				status: 400,
				message: err.message,
			});
		});
};

const patchUser = (req, res) => {
	const id = req.params.id;
	const userObj = req.body;
	userControllers
		.updateUser(id, userObj)
		.then((data) => {
			if (data) {
				success({
					res,
					data,
					status: 201,
					message: `User with Id:${id} updated successfully`,
				});
			} else {
				error({
					res,
					status: 404,
					message: `User with Id:${id} not found`,
				});
			}
		})
		.catch((err) => {
			error({
				res,
				status: 400,
				message: err.message,
			});
		});
};

const putUser = (req, res) => {
	const id = req.params.id;
	const userObj = req.body;
	if (
		!userObj.firstName ||
		!userObj.lastName ||
		!userObj.email ||
		!userObj.password ||
		!userObj.birthday
	) {
		error({
			res,
			status: 400,
			message:
				'Please see example to know how to submit your details, as it seems that some data is missing',
			fields: {
				firstName: 'String',
				lastName: 'String',
				email: 'example@example.com',
				password: 'String',
				birthday: 'YYYY/MM/DD',
			},
		});
	}

	userControllers
		.updateUser(id, userObj)
		.then((data) => {
			if (data) {
				success({
					res,
					data,
					status: 201,
					message: `User with Id:${id} updated successfully`,
				});
			} else {
				error({
					res,
					status: 404,
					message: `User with Id:${id} not found`,
				});
			}
		})
		.catch((err) => {
			error({
				res,
				status: 400,
				message: err.message,
			});
		});
};

module.exports = {
	getAllusers,
	getUserById,
	postUser,
	patchUser,
	putUser,
	deleteUser,
};
