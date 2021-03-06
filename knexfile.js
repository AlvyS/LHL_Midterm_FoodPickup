if(process.env.NODE_ENV !== 'production') require('dotenv').config(); 
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host     : process.env.DB_HOST,
      user     : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME,
      port     : process.env.DB_PORT
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      DATABASE_URL: process.env.DATABASE_URL,
      user     : process.env.H_DB_USER,
      password : process.env.H_DB_PASS,
      database : process.env.H_DB_NAME,
      port     : process.env.H_DB_PORT,
      ssl: true
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
  }
};
