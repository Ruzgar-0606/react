import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="container">
      <Header />

      <div className="games">
        <h2>Welkom bij mijn eerste React-applicatie!</h2>
        <p>Naam: Ruzgar Gur</p>
        <p>Studentnummer: 2217991</p>
        <p>Klas: 25b</p>
      </div>

      <Footer />
    </div>
  )
}

export default App
