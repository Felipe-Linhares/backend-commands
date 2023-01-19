module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/db/dev.sqlite3`
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds/`
    },
    useNullAsDefault: true
  }

  // development: {
  //   client: 'postgresql',
  //   connection: {
  //     host: 'localhost:5432',
  //     database: 'postgres',
  //     user: 'postgres',
  //     password: '12345'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //     directory: `${__dirname}/src/database/migrations`
  //   },
  //   seeds: {
  //     directory: `${__dirname}/src/database/seeds/`
  //   }
  // }

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
}
