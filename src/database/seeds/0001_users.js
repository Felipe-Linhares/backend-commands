const bcrypt = require('bcrypt')
const { roles } = require('../../middlewares/roles')

exports.seed = async function (knex) {
  console.log('Seeding Commands')
  // Deletes ALL existing entries
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
      lastname: '01',
      password: bcrypt.hashSync('123', Number(process.env.SALT)),
      image: '',
      role: 'USER'
    }
  ])
}
