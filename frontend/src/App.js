import React, { useState, useEffect } from 'react';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://backend-service:5000/api/games')
      .then(response => response.json())
      .then(data => setGames(data));
  }, []);

  return (
    <div className="App">
      <h1>Game Store</h1>
      <ul>
        {games.map(game => (
          <li key={game.gameId}>{game.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
