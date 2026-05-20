import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Top Red Bar - ye tumhare screenshot me aa raha hai */}
      <div className="top-bar">
        <div>Follow Us: f t ▶</div>
        <div>📧 info.medicare@jmc.edu.pk | 📞 UAN: 111-001-786</div>
        <div>Whatsapp: (+92 302 8562081)</div>
      </div>

      {/* White Navbar - ye nahi aa raha */}
      <nav className="navbar">
        <div className="nav-inner">
          
          {/* Logo/Text */}
          <Link to="/" className="logo">
            MediCare
          </Link>

          {/* Desktop Menu */}
          <div className="nav-links">
            <Link to="/about">ABOUT US</Link>
            <Link to="/facilities">FACILITIES</Link>
            <Link to="/services">SERVICES</Link>
            <Link to="/doctors">Find Doctor</Link>
            <Link to="/contact">CONTACT US</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="mobile-menu">
            <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT US</Link>
            <Link to="/facilities" onClick={() => setIsOpen(false)}>FACILITIES</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>SERVICES</Link>
            <Link to="/doctors" onClick={() => setIsOpen(false)}>Find Doctor</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>
          </div>
        )}
      </nav>

      <style>{`
        .top-bar {
          background: #d32f2f;
          color: white;
          padding: 8px 20px;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .navbar {
          background: white;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 28px;
          font-weight: bold;
          color: #d32f2f;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 600;
          font-size: 14px;
          transition: 0.2s;
        }

        .nav-links a:hover {
          color: #d32f2f;
        }

        .menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          padding: 16px;
          text-align: center;
          background: white;
          border-top: 1px solid #eee;
        }

        .mobile-menu a {
          text-decoration: none;
          color: #333;
          padding: 12px 0;
          font-weight: 600;
          border-bottom: 1px solid #f0f0f0;
        }

        /* Mobile */
        @media (max-width: 900px) {
          .nav-links {
            display: none;
          }
          .menu-btn {
            display: block;
          }
          .mobile-menu {
            display: flex;
          }
          .top-bar {
            font-size: 11px;
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}