import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>PG Finder</h3>
        <p>Your trusted place to find Paying Guest accommodations across India.</p>
        <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
        </ul>
        <p className="footer-copy">© {new Date().getFullYear()} PG Finder. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
