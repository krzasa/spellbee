import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div id="nav-brand">
        <Link to={'/'}>
          <img id="nav-logo" src="../../../spellbee.svg" alt="spellbee logo" />
        </Link>
        <h2>Spellbee</h2>
      </div>
      <div id="nav-links">
        <div className="nav-link"><Link to={'/'}>Home</Link></div>
        <div className="nav-link"><Link to={'about'}>About</Link></div>
        <div className="nav-link"><Link to={'practice'}>Practice</Link></div>
        <div className="nav-link"><Link to={'play'}>Play</Link></div>
      </div>
      <div id="menu-btn" className="hide">=</div>
    </nav>
  )
}

export default Navbar;