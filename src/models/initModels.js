const Participants = require('./participants.models')
const Conversations = require('./conversations.models')
const Users = require('./users.models')
const Messages = require('./messages.models')

const initModels = ( ) =>{
	Participants.belongsTo(Users); //* relación uno a muchos entre Participants y Users con una llave foránea definida en Participants.
    Users.hasMany(Participants)

    Participants.belongsTo(Conversations)
    Conversations.hasMany(Participants)

   Messages.belongsTo(Participants)
   Participants.hasMany(Messages);

   
}



module.exports = initModels