const {camelToSnake, snakeToCamel} = require('./util/knex-converters')

// This hook is provided by Knex. It allows us to modify the format of the
// result before it's used.
// Ref: https://knexjs.org/#Installation-post-process-response
const postProcessResponse = result => {
  return Array.isArray(result)
    ? result.map(row => snakeToCamel(row))
    : snakeToCamel(result)
}
// Another hook, this time for processing data on the way in to Knex. We can
// leverage it to convert camelCase to snake_case.
// Ref: https://knexjs.org/#Installation-wrap-identifier
const wrapIdentifier = (identifier, origImpl) => origImpl(camelToSnake(identifier))

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    postProcessResponse,
    wrapIdentifier,
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    postProcessResponse,
    wrapIdentifier,
    useNullAsDefault: true,
    seeds: {
      directory: './tests/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: '192.168.1.183',
      database: 'alot',
      username: 'george',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    postProcessResponse,
    wrapIdentifier,
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    postProcessResponse,
    wrapIdentifier,
    useNullAsDefault: true
  }

}
