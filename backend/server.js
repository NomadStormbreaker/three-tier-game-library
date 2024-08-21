const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// Dummy data for games
const games = [
  { gameId: '1', title: 'The Legend of Zelda' },
  { gameId: '2', title: 'Super Mario Odyssey' },
  { gameId: '3', title: 'Minecraft' }
];

app.use(bodyParser.json());

// API to get games
app.get('/api/games', (req, res) => {
  res.json(games);
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
