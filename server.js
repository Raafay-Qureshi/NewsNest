const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.use("/resources", express.static(path.join(__dirname, "resources")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/fyp', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/fyp.html'));
  });

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/register.html'));
  });

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/all', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/users.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});