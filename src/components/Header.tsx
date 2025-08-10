function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <img src="/probee-icon.svg" alt="Probee" className="app-icon" />
          <h1 className="app-name">Probee</h1>
        </div>
        <div className="header-right">
          <a 
            href="/Probee.dmg" 
            className="download-button"
            download
          >
            Download for macOS
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header