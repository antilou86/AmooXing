
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    migrations: {
      directory: "./data/migrations/tables",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  production: {
    client: "pg",
    connection: {
            host: process.env.HEROKU_HOST,
            database: process.env.HEROKU_DB_NAME,
            user: process.env.HEROKU_USER,
            password: process.env.HEROKU_PASSWORD,
          },
    migrations: {
      directory: "./data/migrations/tables",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
//   testing: {
//     client: "pg",
//     connection: process.env.DATABASE_TEST_URL || {
//       database: process.env.DB_TEST_NAME,
//       user: process.env.DB_TEST_USER,
//       password: process.env.DB_TEST_PASSWORD,
//     },
//     migrations: {
//       directory: "./data/migrations",
//     },
//     seeds: {
//       directory: "./data/seeds",
//     },
//   },
};