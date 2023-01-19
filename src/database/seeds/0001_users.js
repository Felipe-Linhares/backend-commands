const bcrypt = require('bcrypt')
const { roles } = require('../../middlewares/roles')

exports.seed = async function (knex) {
  console.log('Seeding Commands')
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      email: 'root@root.com',
      name: 'root ',
      lastname: 'root',
      password: bcrypt.hashSync('root', Number(process.env.SALT)),
      image: '',
      role: roles.ROOT
    },
    {
      id: 2,
      email: 'user@user.com',
      name: 'User',
      lastname: 'user',
      password: bcrypt.hashSync('user', Number(process.env.SALT)),
      image: '',
      role: roles.USER
    }
  ])
}
