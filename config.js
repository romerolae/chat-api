require('dotenv').config();

const configs = {
	api: {
		port: process.env.PORT || 3000,
		host: process.env.HOST || 'http://localhost:3000',
		nodeEnv: process.env.NODE_ENV || 'development',
	},
	db: {
		development: {
			//? Aqui deberan estar las configuraciones para la conexion con sequelize
			dialect: 'postgres',
			host: 'localhost',
			port: 5433,
			username: 'postgres',
			password: 'root',
			database: 'chat-db',
			define: {
				timestamps: true, //? nos obliga a que todas las tablas tengan las propiedad createdAt y updatedAt
				underscored: true,
				underscoredAll: true,
			},
		},
		production: {
			//? Aqui deberan estar las configuraciones para la conexion con sequelize
			dialect: 'postgres',
			host: 'localhost',
			port: 5433,
			username: 'postgres',
			password: 'root',
			database: 'chat-db',
			define: {
				timestamps: true, //? Nos obliga a que todas las tablas tengan la propiedad createdAt y upadtedAt
				underscored: true,
				underscoredAll: true,
			},
			dialectOptions: {
				ssl: {
					require: true,
					rejectUnauthorized: false,
				},
			},
		},
		testing: {
			//? Aqui deberan estar las configuraciones para la conexion con sequelize
			dialect: 'postgres',
			host: 'localhost',
			port: 5433,
			username: 'postgres',
			password: 'root',
			database: 'chat-db',
			define: {
				timestamps: true, //? Nos obliga a que todas las tablas tengan la propiedad createdAt y upadtedAt
				underscored: true,
				underscoredAll: true,
			},
		},
	},
};

module.exports = configs;
