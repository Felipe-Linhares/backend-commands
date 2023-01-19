const knex = require('../database')
const { roles } = require('../middlewares/roles')

module.exports = {
  // * Index

  async index(req, res) {
    if (req.user.roles == roles.USER) {
      return res.status(404).json({
        success: false,
        menssage: 'error'
      })
    } else {
      const commands = await knex.select('*').from('commands')
      return res.send(commands)
    }
  },

  // * Show

  async show(req, res) {
    const { id } = req.params

    const commands = await knex
      .select()
      .from('commands')
      .innerJoin('commands.id')
      .where({ userId: req.user.id, 'commands.id': id })

    return res.send(commands)
  },

  // * Create

  async create(req, res) {
    const { name, request, note } = req.body

    try {
      const [id] = await knex('commands')
        .insert({ name, request, note, userId: req.user.id })
        .returning('id')

      return res.send({
        id,
        success: true,
        message: 'commands.create.ok'
      })
    } catch (error) {
      return res.send({
        success: false,
        message: 'commands.create.nok'
      })
    }
  },

  // * Update

  async update(req, res) {
    const { id } = req.params
    const { name, request, note } = req.body

    try {
      await knex('commands')
        .update({ name, request, note })
        .where({ userId: req.user.id, id })

      return res.send({
        success: true,
        message: 'commands.update.ok'
      })
    } catch (error) {
      return res.send({
        success: false,
        message: 'commands.update.nok'
      })
    }
  },

  // * Delete

  async delete(req, res) {
    const { id } = req.params

    try {
      await knex('commands').delete().where({ id: id })

      return res.send({
        success: true,
        message: 'commands.delete.ok'
      })
    } catch (error) {
      return res.send({
        success: false,
        message: 'commands.delete.nok'
      })
    }
  }
}
