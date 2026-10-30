function Header(props) {
  return (
    <header className="site-header">
      <div className="brand-mark" aria-hidden="true">
        GG
      </div>
      <div>
        <p className="header-label">Ruzgar's collectie</p>
        <h1 className="app-title">{props.title}</h1>
        <p className="header-tagline">{props.tagline}</p>
      </div>
    </header>
  )
}

export default Header
