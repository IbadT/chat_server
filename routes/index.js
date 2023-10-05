const router = require('express').Router();


const userRoutes = require('./userRoutes.js');
router.use('/users', userRoutes);

const chatRoutes = require('./chatRoutes.js');
router.use('/chats', chatRoutes);

const messageRoutes = require('./messageRoutes.js');
router.use('/messages', messageRoutes);

module.exports = router;