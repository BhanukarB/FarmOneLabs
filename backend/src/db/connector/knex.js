/* eslint-disable @typescript-eslint/no-var-requires */
const knex = require('knex');
const path = require('path');
const dotenv = require('dotenv');

const environment = process.env.NODE_ENV || 'development';
if (environment === 'development') {
  dotenv.config({
    path: path.join(__dirname, '../../.env'),
  });
}

function knexConfig(env) {
  let config;
  switch (env) {
    case 'CI':
      config = {
        client: 'sqlite3',
        connection: ':memory:',
        useNullAsDefault: true,
        migrations: {
          tableName: 'knex_migrations',
          directory: path.join(__dirname, '../migrations'),
        },
        debug: false,
      };
      break;
    default:
      config = {
        client: 'pg',
        connection: {
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
        },
        pool: {
          min: 2,
          max: 10,
        },
        migrations: {
          tableName: 'knex_migrations',
          directory: path.join(__dirname, '../migrations'),
        },
        debug: false,
      };
  }
  return config;
}

module.exports = knex(knexConfig(environment));
