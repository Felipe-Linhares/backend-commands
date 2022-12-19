const bcrypt = require('bcrypt')
const { roles } = require('../../middlewares/roles')

exports.seed = async function (knex) {
  console.log('Seeding Commands')
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      email: 'root@gmail.com',
      name: 'FeLIPE ',
      lastname: 'Kazuto',
      password: bcrypt.hashSync('root', Number(process.env.SALT)),
      role: roles.ROOT
    },
    {
      id: 2,
      email: 'b@g.com',
      name: 'FeLIPE1 ',
      lastname: 'Kazuto1',
      password: bcrypt.hashSync('123', Number(process.env.SALT)),
      role: 'USER'
    },
    {
      id: 3,
      email: 'sa@g.scom',
      name: 'FeLIPE sasasa',
      lastname: 'Kazutosasas',
      password: bcrypt.hashSync('123', Number(process.env.SALT)),
      role: 'USER'
    }
  ])
}
