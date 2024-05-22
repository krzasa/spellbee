const Navbar = () => {
  return (
    <nav>
      <div id="nav-brand">
        <a href="/">
          <img id="nav-logo" src="../../../public/spellbee.svg" alt="spellbee logo" />
        </a>
        <h2>Spellbee</h2>
      </div>
      <div id="nav-links">
        <div className="nav-link"><a href="#">Home</a></div>
        <div className="nav-link"><a href="#">About</a></div>
        <div className="nav-link"><a href="#">Practice</a></div>
        <div className="nav-link"><a href="#">Play</a></div>
      </div>
      <div id="menu-btn" className="hide">=</div>
    </nav>
  )
}

export default Navbar;