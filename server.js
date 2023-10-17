const express = require('express');
const port = 5000;
const app = express();

//Generate fake data
const ideas = [
  {
    id: 1,
    text: 'Positive Newsletter, a newsletter that only shares positive, uplifting news',
    tag: 'Technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'Milk cartons that turn a different color the older your milk is getting',
    tag: 'Inventions',
    username: 'SteveRogers',
    date: '2022-01-02',
  },
  {
    id: 3,
    text: 'ATM location that allows you to withdraw money from your bank account',
    tag: 'Software',
    username: 'BruceWayne',
    date: '2022-01-02',
  },
];

//create Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Random Ideas API!',
  });
});
//get all ideas
app.get('/api/ideas', (req, res) => {
  res.json({ success: true, data: ideas });
});
//get single idea
app.get('/api/ideas/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }
  res.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`Server Listening on port ${port}...`));
