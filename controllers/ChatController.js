const ChatService = require('../services/ChatService.js');
const Sentry = require('@sentry/node');

class ChatController {

    async getChatsByUserId(req, res) {
        // { users: 'user_id' }
        try {
            const { users } = req.body;
            const chats = await ChatService.getChatsByUserId(users);
            res.send(chats);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

    async add(req, res) {
        // { name: 'chat1', users: [user1, user_id_1, user_id_2] }
        // { name: 'chat1', users_array: [user1, user_id_1, user_id_2] }
        try {
            const { name, users_array } = req.body;
            const id = await ChatService.add(name, users_array);
            res.send({ id });
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    };
};

module.exports = new ChatController();