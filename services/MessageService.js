const { MessageModel } = require('../models/_models.js');


class MessageService {
    async add(chat, author, text) {
        return new Promise((res, rej) => {
            MessageModel.create({ chat, author, text }).then(response => {
                res(response);
            });
        });
    };

    async getChatsMessagesById(id) {
        return new Promise((res, rej) => {
            MessageModel.findAll({ where: { chat: id }}).then(messages => {
                messages.sort((a,b) => b.createdAt - a.createdAt);
                res(messages);
            })
        })
    }
};

module.exports = new MessageService();