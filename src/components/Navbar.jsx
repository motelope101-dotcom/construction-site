import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>ROMBO X Construction</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
