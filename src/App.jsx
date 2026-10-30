import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import GameCard from './components/GameCard.jsx'

const games = [
  {
    id: 1,
    title: 'Minecraft',
    platform: 'PC',
  },
  {
    id: 2,
    title: 'Mario Kart',
    platform: 'Nintendo Switch',
  },
  {
    id: 3,
    title: 'Rocket League',
    platform: 'PlayStation 5',
  },
  {
    id: 4,
    title: 'GTA 6',
    platform: 'playstation 4',
  },
  {
    id: 5,
    title: 'The Legend of Zelda',
    platform: 'Nintendo Switch',
  },
  {
    id: 6,
    title: 'Fortnite',
    platform: 'PC',
  },
  {
    id: 7,
    title: 'EA Sports FC 26',
    platform: 'PlayStation 5',
  },
]

function App() {
  const [search, setSearch] = useState('')
  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="container">
      <Header title="🎮 Game Collection" />

      <div className="game-list">
        <h2>Welkom bij mijn eerste React-applicatie!</h2>
        <p>Naam: Ruzgar Gur</p>
        <p>Studentnummer: 2217991</p>
        <p>Klas: 25b</p>

        <div className="game-cards">
          <input
            className="search-input"
            type="search"
            placeholder="Zoek een game..."
            aria-label="Zoek een game"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              platform={game.platform}
            />
            ))
          ) : (
            <p className="empty-results">Geen games gevonden.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
