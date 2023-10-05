const { ChatUsers } = require('../models/_models.js');
const { ChatModel } = require('../models/_models.js');

class ChatService {

    async add(name, users_array) {
        return new Promise((res, rej) => {
            ChatModel.create({ name: name, users_array: users_array }).then(createdChat => {
                const { id } = createdChat;
                users_array.forEach(async user_id => {
                    await ChatUsers.create({ user_id, chat_id: id});
                });
                res(id);
            });
        });
    };

    async getChatsByUserId(user_id) {
        return new Promise((res, rej) => {

            ChatUsers.findAll({ where: { user_id }}).then(data => {
                data.sort((a,b) => b.createdAt - a.createdAt);
                res(data);
            });
        });
    };

};

module.exports = new ChatService();