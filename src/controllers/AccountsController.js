const knex = require('../database')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// const UsersController = require('./UsersController')

module.exports = {
  async register(req, res) {
    try {
      const { email, password } = req.body
      console.log(req.body, 'texttsd')
      const user = await knex.select().from('users').where({ email }).first()

      if (bcrypt.compareSync(password, user.password)) {
        console.log(user.role)
        console.log('Existe Usuarios')

        const token = jwt.sign(
          {
            id: user.id,
            // email: user.email,
            // password: user.password,
            role: user.role
          },
          process.env.SECRET_KEY,
          {
            expiresIn: process.env.TOKEN_LIFE
          }
        )
        return res.json({
          success: true,
          menssage: 'users.registration.ok',
          token
          // role: user.role
        })
      } else {
        res.status(400).json({
          success: false,
          menssage: 'users.registration.nok'
        })
      }
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        success: false,
        message: 'users.registration.error'
      })
    }
  }

  //   async register(req, res) {
  //     try {
  //       const { email, password } = req.body
  //       const user = await knex.select().from('users').where({ email, password }).first()

  //     const token = jwt.sign(
  //       {
  //         id: user.id,

  //         role: user.role
  //       },
  //       process.env.SECRET_KEY,
  //       {
  //         expiresIn: process.env.TOKEN_LIFE
  //       }
  //     )
  //     return res.json({
  //       success: true,
  //       menssage: 'users.registration.ok',
  //       token
  //     })
  //   } catch (error) {
  //     console.log(error)
  //     return res.status(400).json({
  //       success: false,
  //       message: 'users.registration.error'
  //     })
  //     }
  //   }
}
