import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Oswaldo Cruz Lopez</h1>

      <div className="links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;