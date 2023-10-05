const Sentry = require('@sentry/node');
const UserService = require('../services/UserService.js');

class UserController {

    async add(req, res) {
        // { username: 'user_1 }
        try {
            const { user_name } = req.body;
            const { id } = await UserService.createUser(user_name);
            res.send({ id });
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

    async deleteUser(req, res) {
        try {
            const { username } = req.body; 
            const deleteResult = await UserService.deleteUser(username);
            res.send(deleteResult);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };
};

module.exports = new UserController();