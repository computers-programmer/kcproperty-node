const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'my-react-node-app'
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

module.exports = { con };