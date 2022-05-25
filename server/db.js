const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'books_collection',
  password: 'my_password',
  port: 5432,
})

module.exports={pool}
