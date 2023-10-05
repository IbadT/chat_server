const ChatModel = require('./ChatModel.js');
const ChatUsers = require('./ChatUsers.js');
const MessageModel = require('./MessageModel.js');
const UserModel = require('./UserModel.js');


UserModel.hasMany(MessageModel, { foreignKey: 'author' });
MessageModel.belongsTo(UserModel, { foreignKey: 'author' });

UserModel.belongsToMany(ChatModel, { through: 'ChatUsers' });
ChatModel.belongsToMany(UserModel, { through: 'ChatUsers' });




// (async () => {

//     await UserModel.sync({ force: true }).then(() => {
//         console.log('UserModel was created');
//     });
    
//     await ChatModel.sync({ force: true }).then(() => {
//         console.log('ChatModel was created');
//     });
    
//     await MessageModel.sync({ force: true }).then(() => {
//         console.log('MessageModel was created');
//     });
    
//     await ChatUsers.sync({ force: true }).then(() => {
//         console.log('ChatUsers model was created');
//     });

// })();

module.exports = {
    UserModel,
    ChatModel,
    MessageModel,
    ChatUsers
}