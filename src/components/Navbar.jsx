import { useState } from "react";
import "../style/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src="../img/logo.png" alt="Logo" className="logo" />
        <span className="brand-name italianno-regular">Mera Bestie</span>
      </div>

      {/* Desktop Menu */}
      <div className="menu-links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Contact</a>
      </div>

      {/* Icons */}
      <div className="icon-group">
        <img src="./img/cart_icon.png" alt="Cart" className="icon" />
        <img src="../img/user.png" alt="User" className="icon" />
        {/* Mobile Menu Button */}
        <img src="../img/menu.png" alt="Menu" className="menu-icon" onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="dropdown-menu">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </div>
      )}
    </nav>
  );
}
