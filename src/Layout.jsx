import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/projects', name: 'Projects' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <div className="bg-[#1E1E1E] text-white font-inter min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-[#2A2A2A]">
        <div className="container mx-auto flex items-center justify-between py-6 px-4 max-w-6xl">
          <span className="text-3xl font-bold tracking-widest">MEWA</span>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 text-sm">
            {navItems.map(({ path, name }) => (
              <NavLink
                key={name}
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-white after:transition-all ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>

          {/* Hamburger Icon (Mobile Only) */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3">
            {navItems.map(({ path, name }) => (
              <NavLink
                key={name}
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block text-sm py-2 border-b border-[#2A2A2A] ${
                    isActive ? 'text-white font-semibold' : 'text-[#CFCFCF]'
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2A2A2A] py-10">
        <div className="container mx-auto max-w-6xl text-center px-4">
          <div className="flex justify-center gap-6 text-2xl mb-6">
            <a
              href="https://www.facebook.com/pranaya.chakradhar"
              aria-label="Facebook"
              className="hover:text-[#509CF9] transition"
              target="_blank" rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/pranaya_chakradhar/"
              aria-label="Instagram"
              className="hover:text-[#E6683C] transition"
              target="_blank" rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/pranaya-chakradhar-8575aa2a2/"
              aria-label="LinkedIn"
              className="hover:text-[#0A66C2] transition"
              target="_blank" rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <p className="text-[#AAAAAA] text-sm">Designed by Pranaya Chakradhar</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
