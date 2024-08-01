/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.post('/register', 'AuthController.register') // Register a new user
router.post('/login', 'AuthController.login') // Login the user
