
const express = require('express')
const app = express()
const db = require('./utils/database')
const userRouter = require('./users/users.router')
//? Relations
const initModels = require('./models/initModels')
//? Handler of responses
const responseHandlers = require('./utils/handleResponses')
//? Enable incoming JSON data
app.use(express.json());


app.get('/', (req, res)=>{
	responseHandlers.success({
		res,
		status: 200,
		message: 'Server started successfully',
		data: {
			users: 'http://localhost:9000/api/v1/users',
			conversations: 'http://localhost:9000/api/v1/conversations'
		},
	});
})

require('dotenv').config

db.authenticate()
	.then(() => {
		console.log('Las credenciales son correctas');
	})
	.catch((err) => {
		console.log(err); //! Errores de authenticacion
	});

db.sync()
	.then(() => {
		console.log('La base de datos se sincronizo correctamente');
	})
	.catch((err) => {
		console.log(err); //! Errores con tablas propiedades etc.
	});

//? User routes
app.use('/api/v1', userRouter);

//? This must be the last route in my app
app.use('*', (req, res)=>{
    responseHandlers.error({
			res,
			status: 404,
			message: 'URL not found, please try with http://localhost:3000'
		});
})

app.listen(3000, ()=>{
    console.log('Server started at port 3000')
})

