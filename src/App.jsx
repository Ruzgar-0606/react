import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import GameCard from './components/GameCard.jsx'

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
          <GameCard title="Minecraft" platform="PC" />
          <GameCard title="Mario Kart" platform="Nintendo Switch" />
          <GameCard title="Rocket League" platform="PlayStation 5" />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
