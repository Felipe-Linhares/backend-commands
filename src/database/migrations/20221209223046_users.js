exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary()

    table.string('email', 255).notNullable().unique()
    table.string('name', 255).notNullable()
    table.string('lastname', 255).notNullable()
    table.string('password', 255).notNullable()
    table.text('image').defaultTo('')
    table.enu('role', ['ROOT', 'USER']).notNullable()

    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
