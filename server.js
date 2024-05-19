const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/fyp', (req, res) => {
    res.sendFile(path.join(__dirname, 'fyp.html'));
  });

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});