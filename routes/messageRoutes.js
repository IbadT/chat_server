const router = require('express').Router();
const MessageController = require('../controllers/MessageController.js');



/**
 * @swagger
 * /api/messages/add:
 *   post:
 *     summary: Send message to the chat from user (author --> user_id)
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               chat:
 *                 type: integer
 *               author:
 *                 type: integer
 *               text:
 *                 type: string
 *     responses:  
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Bad Request
 */

// отправить сообщение в чат от лица пользователя 
router.post('/add', MessageController.add); 


/**
 * @swagger
 * /api/messages/get:
 *   post:
 *     summary: Get message list in the chat by chat_id
 *     description: POST
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               chat:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Bad Request
 */

// получить список сообщений в конкретном чате ?post?
router.post('/get', MessageController.getMessages); 

module.exports = router;