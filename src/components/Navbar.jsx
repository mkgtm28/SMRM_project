import { NavLink } from "react-router-dom";

import {
  House,
  User,
  BriefcaseBusiness,
  Mail,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* LOGO */}

      <div className="navbar-logo">
        <div className="logo-symbol">
          S
        </div>

        <span>SMRM</span>
      </div>


      {/* MOBILE MENU BUTTON */}

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>


      {/* NAVIGATION */}

      <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>

        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <House size={19} />
          <span>Home</span>
        </NavLink>


        <NavLink
          to="/about"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <User size={19} />
          <span>About</span>
        </NavLink>


        <NavLink
          to="/service"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <BriefcaseBusiness size={19} />
          <span>Service</span>
        </NavLink>


        <NavLink
          to="/contact"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <Mail size={19} />
          <span>Contact</span>
        </NavLink>

      </div>


      {/* BOTTOM */}

      <div className="navbar-bottom">
        <span>© 2026 SMRM</span>
      </div>

    </nav>
  );
}

export default Navbar;