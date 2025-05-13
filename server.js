const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

////////////////// DB Code
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
//////////////////

const app = express();
const PORT = 5000;

// Middleware to parse JSON data
app.use(express.json());

// Simple API route
// app.get('/api/message', (req, res) => {
//   return res.json({ status: 'Success', message: 'Hello UVI from the server!' });
// });

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Dummy user data
// const users = [
//   {
//     username: 'admin',
//     password: '$2b$10$B9w6sZcRdx9mFiK3ZeyTc.bcmRc9QKJ9TP7/Y4woOZGv2zTCeC4F2', // "password123" hashed
//     profile: {
//       name: 'admin Gurjar',
//       email: 'admin@example.com',
//       bio: 'This is a demo bio.',
//     },
//   },
//   {
//     username: 'uvi',
//     password: '1234', // "password123" hashed
//     profile: {
//       name: 'UVI Gurjar',
//       email: 'uvi@example.com',
//       bio: 'This is a demo bio.',
//     },
//   },
//   {
//     username: 'TEST',
//     password: '1234', // "password123" hashed
//     profile: {
//       name: 'TEST Gurjar',
//       email: 'test@example.com',
//       bio: 'This is a demo bio.',
//     },
//   },
// ];
// Dummy user data

// POST route for signup create new user
app.post('/api/signup', async (req, res) => {
  const { userName, userEmail, password } = req.body;
  
  // validation
  if (userName === '' || userEmail === '' || password === '') {
    return res.status(400).json({ status: 'Failed', message: 'All field value must' });
  }
  // validation

  const hashedPassword = await bcrypt.hash(password, 10);
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  con.query(query, [userName, userEmail, hashedPassword], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Database insert failed' });
    }
    res.json({ status: 'Success', message: 'Record inserted successfully', id: result.insertId });
  });
});

// POST route for login
app.post('/api/login', async (req, res) => {
  const { userName, password } = req.body;

  // validation
  if (userName === '' || password === '') {
    return res.status(400).json({ status: 'Failed', message: 'All field value must' });
  }
  // validation

  const query = 'SELECT * FROM users WHERE email = ?';
  con.query(query, [userName], async (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Database insert failed' });
    }
    if (result.length === 0) {
      return res.status(404).json({ status: 'Failed', message: 'User not found' });
    }

    const storedHashedPassword = result[0].password;

    try {
      const isMatch = await bcrypt.compare(password, storedHashedPassword);
      if (isMatch) {
        // Passwords match, login success and then Generate JWT token
        const token = jwt.sign({ userEmail: result[0].email }, 'uvi', { expiresIn: '1h' });
        return res.status(200).json({ status: 'Success', message: 'Login successful', result: result[0], token: token, userEmail: result[0].email });
      } else {
        // Passwords do not match
        return res.status(401).json({ status: 'Failed', message: 'Incorrect password' });
      }
    } catch (error) {
      console.error('Error comparing passwords:', error);
      return res.status(500).json({ status: 'Failed', message: 'Error during password comparison' });
    }
  });

  // Find user
  // const user = users.find((user) => user.username === username);
  // if (!user) return res.status(400).json({ message: 'Invalid username or password' });

  // Compare passwords
  // const isMatch = await bcrypt.compare(password, user.password);
  // if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' });
  // if (user.password !== password) return res.status(400).json({ message: 'Invalid username or password' });

  // Generate JWT token
  // const token = jwt.sign({ username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
  // res.json({ token: token, userEmail: user.profile.email});
});

// profile API route get user data
// app.get('/api/profile2', (req, res) => {
//   const userEmail = req.query.userEmail;
//   const user = users.find((user) => user.profile.email === userEmail);
//   res.json({ name: user.profile.name, email: user.profile.email, bio: user.profile.bio });
// });

// profile API route get user data
app.get('/api/profile', (req, res) => {
  const userEmail = req.query.userEmail;
  con.query("SELECT * FROM users WHERE email = ?", [userEmail], async function (err, result, fields) {
    if (err) throw err;
    res.json({ status: 'Success', message: 'User details', result: result[0] });
  });
});

// get all user list
app.get('/api/userList', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;
  const search = req.query.search || '';
  const offset = (page - 1) * limit; // Calculate offset for pagination

  con.query(`SELECT * FROM users WHERE name LIKE ? OR email LIKE ? LIMIT ${limit} OFFSET ${offset}`, [`%${search}%`, `%${search}%`], async function (err, result, fields) {
    if (err) throw err;

    const countQuery = `SELECT COUNT(*) AS total FROM users WHERE name LIKE ? OR email LIKE ?`;
    con.query(countQuery, [`%${search}%`, `%${search}%`], (err, countResult) => {
      if (err) throw err;
      const totalUsers = countResult[0].total; // Total number of users in the database
      const totalPages = Math.ceil(totalUsers / limit); // Calculate total pages
      return res.json({
        status: 'Success',
        message: 'User listing',
        result: result,
        totalUsers: totalUsers,
        totalPages: totalPages,
        currentPage: page,
      });
    });
  });
});

////////////admin side API/////////////////

app.post('/api/admin/userAdd', async (req, res) => {
  const userData = req.body;
  
  // validation
  if (userData.fName === '' || userData.lName === '' || userData.email === '' || userData.tel === '' || userData.bio === '' || userData.address === '') {
    return res.status(400).json({ status: 'Failed', message: 'All field value must' });
  }
  // validation

});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
