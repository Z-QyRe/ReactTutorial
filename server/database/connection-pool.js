'use strict';

const { Pool } = require('pg');

const connectionPool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'books',
    password: 'R3t29r$2',
    port: 5432,
});

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
connectionPool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})

console.log(connectionPool.user, connectionPool.password);
console.log('Connection pool created.');

module.exports = {
    query: (text, params, callback) => {
        return connectionPool.query(text, params, callback)
      },    
}