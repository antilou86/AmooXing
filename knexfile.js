
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
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations/tables",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};