const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
// const validation = require('../helpers/validation.js');



/**
 * @swagger
 * /api/users/add:
 *   post:
 *     summary: Add new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               user_name:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Seccess
 *       '400':
 *         description: Bad request
 *       '403':
 *         description: Forbidden
 */

// добавить нового пользователя 
router.post('/add', UserController.add); 


/**
 * @swagger
 * /api/users/deleteUser:
 *   delete:
 *     summary: DELETE user ( !!! this router doesn't used in this task !!! )
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               username:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Seccess
 */

router.delete('/deleteUser', UserController.deleteUser);

module.exports = router;