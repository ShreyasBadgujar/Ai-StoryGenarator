import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const NavLinkComponent = ({ to, children, exact = false }) => (
    <a
      href={to}
      className="relative group block py-2 px-3 md:p-0 text-white hover:text-purple-300 transition-all duration-300 font-medium"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
    </a>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-purple-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/008/460/149/non_2x/story-pen-ink-logo-vector.jpg" 
              className="h-12 w-12 rounded-full ring-2 ring-purple-500/50 group-hover:ring-purple-400 transition-all duration-300 group-hover:scale-110" 
              alt="Storytail Logo" 
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
            Storytail
          </span>
        </a>

        {/* Mobile menu button */}
        <div className="flex md:order-2">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-5 h-5">
              <span className={`absolute top-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 top-2' : ''}`}></span>
              <span className={`absolute top-2 left-0 w-full h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute top-4 left-0 w-full h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 top-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg bg-gray-900/95 backdrop-blur-md md:space-x-8 md:flex-row md:mt-0 md:bg-transparent border border-purple-500/20 md:border-0">
            <li>
              <NavLinkComponent to="/" exact>Home</NavLinkComponent>
            </li>
            <li>
              <NavLinkComponent to="about">About</NavLinkComponent>
            </li>
            <li>
              <NavLinkComponent to="contact">Contact</NavLinkComponent>
            </li>
            <li className="md:ml-4 ">
              <NavLink 
                to="story-genration"
                onClick={()=>window.scrollTo(0,0)}
                className="block py-2 px-4 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 font-medium text-center"
              >
                Create Story
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar