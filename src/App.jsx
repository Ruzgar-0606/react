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
]

function App() {
  return (
    <div className="container">
      <Header title="🎮 Game Collection" />

      <div className="game-list">
        <h2>Welkom bij mijn eerste React-applicatie!</h2>
        <p>Naam: Ruzgar Gur</p>
        <p>Studentnummer: 2217991</p>
        <p>Klas: 25b</p>

        <div className="game-cards">
          {games.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              platform={game.platform}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
