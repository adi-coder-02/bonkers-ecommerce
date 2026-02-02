import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/logo.png';
import { CartContext } from '../context/CartContext'; // import CartContext

const Navbar = ({ user = null }) => {
  const { cartItems } = useContext(CartContext);  // get cartItems
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0); // calculate total qty

  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const toggleSearch = () => setShowSearch(prev => !prev);

  const handleLogout = () => {
    // TODO: clear auth state
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </NavLink>

        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black underline underline-offset-8 font-medium"
                : "text-gray-700 hover:text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive
                ? "text-black underline underline-offset-8 font-medium"
                : "text-gray-700 hover:text-black"
            }
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-black underline underline-offset-8 font-medium"
                : "text-gray-700 hover:text-black"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-black underline underline-offset-8 font-medium"
                : "text-gray-700 hover:text-black"
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-5 text-xl text-gray-700">
          <div className="relative">
            <FaSearch
              className="cursor-pointer hover:text-black"
              onClick={toggleSearch}
            />
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute right-0 top-8 w-40 px-2 py-1 border rounded text-sm shadow-md bg-white"
              />
            )}
          </div>

          {user ? (
            <FaUser className="cursor-pointer hover:text-black" onClick={() => navigate('/profile')} />
          ) : (
            <NavLink to="/login">
              <FaUser className="cursor-pointer hover:text-black" />
            </NavLink>
          )}

          {/* Cart with badge */}
          <NavLink to="/cart" className="relative">
            <FaShoppingBag className="cursor-pointer hover:text-black" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
                {cartCount}
              </span>
            )}
          </NavLink>

          {/* Mobile menu toggle */}
          <button className="md:hidden ml-2 text-2xl" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
          <NavLink to="/" className="block text-gray-700" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/collection" className="block text-gray-700" onClick={toggleMenu}>Collection</NavLink>
          <NavLink to="/about" className="block text-gray-700" onClick={toggleMenu}>About</NavLink>
          <NavLink to="/contact" className="block text-gray-700" onClick={toggleMenu}>Contact</NavLink>
          {user ? (
            <button
              onClick={() => { handleLogout(); toggleMenu(); }}
              className="block text-red-600"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink to="/login" className="block text-gray-700" onClick={toggleMenu}>Login</NavLink>
              <NavLink to="/register" className="block text-gray-700" onClick={toggleMenu}>Register</NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
