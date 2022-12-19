const knex = require('../database')
const bcrypt = require('bcrypt')
const { roles } = require('../middlewares/roles')

module.exports = {
  // Index
  async index(req, res) {
    const users = await knex
      .select(
        'id',
        'email',
        'name',
        'lastname',
        'role',
        'created_at',
        'updated_at'
      )
      .from('users')
    return res.send(users)
  },

  // Show
  async show(req, res) {},

  // Create
  async create(req, res) {
    let { email, name, lastname, password } = req.body

    try {
      password = bcrypt.hashSync(password, Number(process.env.SALT))

      console.log(roles)

      const [id] = await knex('users')
        .insert({ email, name, lastname, password, role: roles.USER })
        .returning('id')

      return res.send({
        id,
        success: true,
        message: 'user.create.ok'
      })
    } catch (error) {
      console.log(error)
      return res.send({
        success: false,
        message: 'user.create.nok'
      })
    }
  },

  // Update
  async update(req, res) {
    const { id } = req.params
    const { email, name, lastname } = req.body
    try {
      await knex('users').update({ email, name, lastname }).where({ id })
      return res.send({
        sucess: true,
        message: 'user.update.ok'
      })
    } catch (error) {
      return res.send({
        sucess: false,
        message: 'user.update.nok'
      })
    }
  },

  // Delete
  async delete(req, res) {
    try {
      await knex('users').delete().where({ id: req.user.id })
      return res.send({
        success: true,
        message: 'user.delete.ok'
      })
    } catch (error) {
      return res.send({
        success: false,
        message: 'user.delete.nok'
      })
    }
  }
}
