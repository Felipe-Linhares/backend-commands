// * Imports
const express = require('express')
const routes = express.Router()

const UsersController = require('./controllers/UsersController')
const CommandsController = require('./controllers/CommandsController')
const AccountsController = require('./controllers/AccountsController')

const auth = require('./middlewares/auth.js')

const { roles, permissions } = require('./middlewares/roles')

routes.get('/sys', (req, res) => {
  return res.json({
    version: '1.0',
    author: 'Felipe Kazuto'
  })
})

routes.post('/login', AccountsController.register)

// * USERS ROUTES
routes.get(
  '/users/index',
  auth,
  permissions([roles.ROOT]),
  UsersController.index
)
routes.get(
  '/users/show/:id',
  auth,
  permissions([roles.ROOT, roles.USER]),
  UsersController.show
)
routes.post(
  '/users/create',
  auth,
  permissions([roles.ROOT]),
  UsersController.create
)
routes.put(
  '/users/update/:id',
  auth,
  permissions([roles.ROOT, roles.USER]),
  UsersController.update
)
routes.delete(
  '/users/delete/:id',
  auth,
  permissions([roles.ROOT]),
  UsersController.delete
)

// * COMMANDS ROUTES
routes.get(
  '/commands/index',
  auth,
  permissions([roles.USER, roles.ROOT]),
  CommandsController.index
)
routes.get(
  '/commands/show/:id',
  auth,
  permissions([roles.USER]),
  CommandsController.show
)
routes.post(
  '/commands/create',
  auth,
  permissions([roles.USER]),
  CommandsController.create
)
routes.put(
  '/commands/update/:id',
  auth,
  permissions([roles.USER]),
  CommandsController.update
)
routes.delete(
  '/commands/delete/:id',
  auth,
  permissions([roles.USER, roles.ROOT]),
  CommandsController.delete
)

// * Export
module.exports = routes
