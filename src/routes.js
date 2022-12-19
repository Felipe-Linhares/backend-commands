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
routes.get('/users', auth, permissions([roles.ROOT]), UsersController.index)
routes.post('/users', auth, permissions([roles.ROOT]), UsersController.create)
routes.put(
  '/users/:id',
  auth,
  permissions([roles.ROOT]),
  UsersController.update
)
routes.delete(
  '/users/:id',
  permissions([roles.ROOT]),
  auth,
  UsersController.delete
)

// * COMMANDS ROUTES
routes.get(
  '/commands',
  auth,
  permissions([roles.USER]),
  CommandsController.index
)
routes.post(
  '/commands',
  auth,
  permissions([roles.USER]),
  CommandsController.create
)
routes.put(
  '/commands/:id',
  auth,
  permissions([roles.USER]),
  CommandsController.update
)
routes.delete(
  '/commands/:id',
  auth,
  permissions([roles.USER]),
  CommandsController.delete
)

// * Export
module.exports = routes
