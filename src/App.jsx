import './App.css'

const student = {
  name: 'Ruzgar',
  number: '2217991',
  className: '25b',
}

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Game Collection home">
          <span className="brand-icon" aria-hidden="true">🎮</span>
          <span>Game Collection</span>
        </a>
        <span className="header-label">Mijn eerste React-app</span>
      </header>

      <main className="main-content">
        <section className="welcome-card" aria-labelledby="page-title">
          <div className="welcome-copy">
            <p className="eyebrow"><span className="status-dot" /> React + Vite</p>
            <h1 id="page-title">Game Collection</h1>
            <h2>Welkom bij mijn eerste React-applicatie!</h2>
            <p className="intro">
              Dit is het begin van mijn eigen gamebibliotheek. Hier ga ik
              binnenkort mijn favoriete games verzamelen.
            </p>
          </div>

          <section className="student-card" aria-labelledby="student-title">
            <div className="student-card-heading">
              <span className="profile-icon" aria-hidden="true">R</span>
              <div>
                <p className="card-kicker">Studentprofiel</p>
                <h3 id="student-title">Over mij</h3>
              </div>
            </div>
            <dl className="student-details">
              <div>
                <dt>Naam</dt>
                <dd>{student.name}</dd>
              </div>
              <div>
                <dt>Studentnummer</dt>
                <dd>{student.number}</dd>
              </div>
              <div>
                <dt>Klas</dt>
                <dd>{student.className}</dd>
              </div>
            </dl>
          </section>
        </section>
      </main>

      <footer className="site-footer">
        <span>Gebouwd met React</span>
        <span className="footer-divider" aria-hidden="true">·</span>
        <span>De Game Collection begint hier</span>
      </footer>
    </div>
  )
}

export default App
