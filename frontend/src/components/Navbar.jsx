
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link className="logo" to="/">
        tekvito<span>·</span>
      </Link>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/employers">For Employers</NavLink>
        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </nav>

      <Link className="nav-button" to="/contact">
        Let's Talk <span>↗</span>
      </Link>
    </header>
  );
}

export default Navbar;
