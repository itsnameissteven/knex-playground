import { knexSnakeCaseMappers } from 'objection';

export const knexConfig = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    database: 'knex_test',
    user: 'postgres',
    password: 'postgres',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: 'src/db/migrations',
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: 'src/seeds',
  },
  ...knexSnakeCaseMappers(),
};
