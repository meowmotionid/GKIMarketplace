
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Store, LayoutGrid, Heart } from 'lucide-react';
import { useApp } from '../store/AppContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, user, role } = useApp();
  const location = useLocation();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Beranda', path: '/', icon: LayoutGrid },
    { name: 'Penjual', path: '/sellers', icon: Store },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="font-extrabold text-xl tracking-tight text-gray-900">GKI Marketplace</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1.5 text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>

            {user ? (
              <Link to={role === 'seller' ? '/dashboard' : '/profile'} className="flex items-center space-x-2 p-1.5 rounded-full hover:bg-gray-100 transition-colors">
                <img src={`https://ui-avatars.com/api/?name=${user.nama}&background=random`} alt="avatar" className="w-8 h-8 rounded-full border-2 border-indigo-100" />
                <span className="hidden sm:inline text-sm font-semibold text-gray-700">{user.nama}</span>
              </Link>
            ) : (
              <Link to="/login" className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                Masuk
              </Link>
            )}

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 text-gray-700 font-medium"
            >
              <link.icon className="w-5 h-5 text-indigo-500" />
              <span>{link.name}</span>
            </Link>
          ))}
          {role === 'seller' && (
             <Link
             to="/dashboard"
             onClick={() => setIsOpen(false)}
             className="flex items-center space-x-3 p-3 rounded-xl bg-indigo-50 text-indigo-700 font-medium"
           >
             <Store className="w-5 h-5 text-indigo-500" />
             <span>Dashboard Penjual</span>
           </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
