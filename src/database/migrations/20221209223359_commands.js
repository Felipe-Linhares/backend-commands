exports.up = function (knex) {
  return knex.schema.createTable('commands', function (table) {
    table.increments('id').primary()

    table.integer('userId').notNullable()
    table.foreign('userId').references('users.id').onDelete('CASCADE')

    table.string('name', 100).notNullable()
    table.string('request', 255).notNullable()
    table.string('note', 255)

    table.timestamp('created').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updated').notNullable().defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('commands')
}
