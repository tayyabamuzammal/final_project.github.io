import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Red Top Bar */}
      <div className="top-bar">
        <div>Follow Us:</div>
        <div className="social-icons">
          <a href="#">f</a>
          <a href="#">t</a>
          <a href="#">▶</a>
        </div>
        <div>✉ info.medicare@jmc.edu.pk</div>
        <div>📞 UAN: 111-001-786</div>
        <div>Whatsapp: (+92 302 8562081)</div>
      </div>

      {/* Logo + Menu Section */}
      <div className="header-main">
        <Link to="/" className="logo">
          <div className="logo-box">
            <span className="logo-text">MEDICARE</span>
            <div className="logo-sub">
              <span>CARDIAC & GENERAL HOSPITAL</span>
              <small>Where Patient Care Is At The Heart Of All We Do</small>
            </div>
          </div>
        </Link>

        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isOpen && (
          <div className="mobile-menu">
            <NavLink to="/about" onClick={() => setIsOpen(false)}>ABOUT US</NavLink>
            <NavLink to="/facilities" onClick={() => setIsOpen(false)}>FACILITIES</NavLink>
            <NavLink to="/services" onClick={() => setIsOpen(false)}>SERVICES</NavLink>
            <NavLink to="/find-doctor" onClick={() => setIsOpen(false)}>FIND DOCTOR</NavLink>
            <NavLink to="/appointment" onClick={() => setIsOpen(false)}>BOOK APPOINTMENT</NavLink>
            
            {/* Naye 3 links add kiye */}
            <NavLink to="/lab-report" onClick={() => setIsOpen(false)}>LAB REPORT</NavLink>
            <NavLink to="/patient-record" onClick={() => setIsOpen(false)}>PATIENT RECORD</NavLink>
            <NavLink to="/help" onClick={() => setIsOpen(false)}>MEDICARE HELP</NavLink>
            
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</NavLink>
          </div>
        )}
      </div>

      <style>{`
        body, html { margin: 0; padding: 0; font-family: Arial, sans-serif; }

        .top-bar {
          background: #d32f2f;
          color: white;
          padding: 15px 20px;
          text-align: center;
          font-size: 14px;
        }

        .top-bar > div { margin: 8px 0; }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          font-size: 20px;
        }

        .social-icons a { color: white; text-decoration: none; }

        .header-main {
          background: white;
          padding: 20px;
          text-align: center;
          border-bottom: 1px solid #eee;
          position: relative;
        }

        .logo { text-decoration: none; }
        
        .logo-box {
          border: 3px solid #d32f2f;
          display: inline-block;
          padding: 10px 25px;
          background: white;
        }

        .logo-text {
          background: #d32f2f;
          color: white;
          padding: 8px 20px;
          font-size: 28px;
          font-weight: 800;
          letter-spacing: 2px;
          display: block;
        }

        .logo-sub {
          margin-top: 8px;
        }

        .logo-sub span {
          color: #1a237e;
          font-size: 16px;
          font-weight: 700;
          display: block;
        }

        .logo-sub small {
          color: #333;
          font-size: 12px;
          display: block;
          margin-top: 3px;
        }

        .menu-btn {
          background: white;
          border: 2px solid #d32f2f;
          border-radius: 6px;
          padding: 10px 14px;
          margin-top: 15px;
          cursor: pointer;
          color: #d32f2f;
          display: inline-flex;
        }

        .menu-btn:hover {
          background: #d32f2f;
          color: white;
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          margin-top: 15px;
          border-top: 1px solid #eee;
          padding-top: 15px;
        }

        .mobile-menu a {
          text-decoration: none;
          color: #333;
          padding: 12px 0;
          font-weight: 600;
          font-size: 15px;
          text-transform: uppercase;
        }

        .mobile-menu a:hover,
        .mobile-menu a.active {
          color: #d32f2f;
        }
      `}</style>
    </header>
  );
}