const { UserModel } = require('../models/_models.js');


class UserService {

    async createUser(user_name) {
        return new Promise((res, rej) => {
            UserModel.create({ username: user_name }).then(createdUser => {
                res(createdUser);
            });
        });
    };

    async deleteUser(username) {
        return new Promise((res, rej) => {
            UserModel.destroy({ where: { username: username } }).then(deleteResult => {
                console.log(deleteResult);
                res(deleteResult);
            });
        });
    };
    
};

module.exports = new UserService();