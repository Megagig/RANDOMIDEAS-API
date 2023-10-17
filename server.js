const express = require('express');
const port = 5000;
const app = express();

//create Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Random Ideas API!',
  });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);
app.listen(port, () => console.log(`Server Listening on port ${port}...`));
