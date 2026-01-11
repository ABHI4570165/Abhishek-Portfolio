import { useState } from 'react';

const Navbar = () => {
  // State to manage the mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      
      {/* Logo */}
      <div className="logo">
        <span className="text-gradient">MyPortfolio</span>
      </div>
      
      {/* Nav Links Container 
        Added logic: if isOpen is true, add 'active' class to show menu on mobile
      */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>

        {/* MOBILE ONLY BUTTON (Hidden on PC via CSS) */}
        <a href="/Resume.pdf" download className="btn-cv btn-mobile" onClick={closeMenu}>
          Download CV
        </a>
      </div>

      <div className="nav-right">
        {/* PC ONLY BUTTON (Hidden on Mobile via CSS) */}
        <a href="/Resume.pdf" download className="btn-cv btn-pc">
          Download CV
        </a>
        
        {/* Hamburger Icon with Click Event */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'} 
        </div>
      </div>

    </nav>
  );
};

export default Navbar;