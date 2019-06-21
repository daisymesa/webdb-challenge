const knex = require('knex');

const knexConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './lambda.db3', 
  },
};

const db = knex(knexConfig);
