import React from 'react'

const Navbar = ({ isScrolled }) => {
  return (
    <nav className={`text-gray-300 p-10 fixed w-screen ${isScrolled ? 'navbar-scrolled' : 'navbar'}`}>
      <ul className="flex items-center justify-center space-x-12 font-bold text-2xl h-full">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar