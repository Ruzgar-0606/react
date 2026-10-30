import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import GameCard from './components/GameCard.jsx'
import games from './data/games.json'

function App() {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('default')
  const query = search.trim().toLowerCase()
  const filteredGames = games
    .filter((game) =>
      [game.title, game.genre, game.platform, game.developer]
        .join(' ')
        .toLowerCase()
        .includes(query),
    )
    .sort((firstGame, secondGame) => {
      if (sortBy === 'rating') return secondGame.rating - firstGame.rating
      if (sortBy === 'year') return secondGame.year - firstGame.year
      return firstGame.id - secondGame.id
    })

  return (
    <div className="container">
      <Header
        title="🎮 Game Collection"
        tagline="Ontdek, doorzoek en sorteer mijn favoriete games."
      />

      <div className="game-list">
        <section className="collection-intro" aria-labelledby="welcome-heading">
          <div>
            <p className="eyebrow">Mijn gamebibliotheek</p>
            <h2 id="welcome-heading">Welkom in mijn collectie</h2>
            <p>
              Van avonturen tot races: zoek een game op titel, genre, platform
              of ontwikkelaar.
            </p>
          </div>
          <div className="student-details">
            <span>Gemaakt door</span>
            <strong>Ruzgar Gur</strong>
            <span>Software Developer · Klas 25b</span>
          </div>
        </section>

        <section className="game-library" aria-label="Gamebibliotheek">
          <input
            className="search-input"
            type="search"
            placeholder="Zoek op titel, genre, platform of developer..."
            aria-label="Zoek games op titel, genre, platform of developer"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <div className="game-toolbar">
            <p className="results-count" aria-live="polite">
              {filteredGames.length} van {games.length} games
            </p>
            <label className="sort-control">
              <span>Sorteer op</span>
              <select
                aria-label="Sorteer games"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                <option value="default">Standaardvolgorde</option>
                <option value="rating">Hoogste rating</option>
                <option value="year">Nieuwste jaar</option>
              </select>
            </label>
          </div>
          <div className="games-grid">
            {filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <GameCard
                  key={game.id}
                  title={game.title}
                  platform={game.platform}
                  genre={game.genre}
                  rating={game.rating}
                  year={game.year}
                  image={game.image}
                  developer={game.developer}
                  multiplayer={game.multiplayer}
                />
              ))
            ) : (
              <p className="empty-results">Geen games gevonden.</p>
            )}
          </div>
        </section>
      </div>

      <Footer gameCount={games.length} />
    </div>
  )
}

export default App
