const path = require('path');
const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');
connectDB();
const app = express();

//Static Folder
app.use(express.static(path.join(__dirname, 'public')));
//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//create Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Random Ideas API!',
  });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);
app.listen(port, () => console.log(`Server Listening on port ${port}...`));
