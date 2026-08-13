const express = require('express');
const cors = require('cors');
require('express-async-errors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

// simple health route
app.get('/api/health', (req, res) => res.json({ ok: true }));

// basic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Server error' });
});

module.exports = app;
