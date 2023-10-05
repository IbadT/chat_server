const router = require('express').Router();
const ChatController = require('../controllers/ChatController.js');



/**
 * @swagger
 * /api/chats/get:
 *   post:
 *     summary: GET chat by user_id
 *     tags: [Chats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               users:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Bad request
 *       '403':
 *         description: Forbidden
 */

// получить список чатов конкретного пользователя ?post?
router.post('/get', ChatController.getChatsByUserId) 


/**
 * @swagger
 * /api/chats/add:
 *   post:
 *     summary: Add new chat with users (array)
 *     tags: [Chats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               users_array:
 *                 type: array
 *                 items:
 *                   type: integer
 *     responses:
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Bad Request
 */

// создать новый чат между пользователями 
router.post('/add', ChatController.add); 



module.exports = router;