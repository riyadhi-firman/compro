import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import LogoMMD from './LogoMMD';
import DarkModeToggle from './DarkModeToggle';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Coverage', href: '/coverage' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src="/logo-mmd.png" 
                  alt="MMD Logo" 
                  className="w-22 h-22 object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <DarkModeToggle />
              <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
                <Phone className="h-4 w-4" />
                <span>(021) 555-0123</span>
              </div>
              <Link
                to="/contact"
                className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t pt-2">
                <div className="px-3 py-2 flex items-center justify-between">
                  <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                  <Phone className="h-4 w-4 inline mr-1" />
                  (021) 555-0123
                  </div>
                  <DarkModeToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <LogoMMD size="sm" />
                <div>
                  <span className="text-xl font-bold">PT. Mitra Media Data</span>
                  <div className="text-sm text-gray-400 dark:text-gray-500">Partner Internet Terpercaya Anda</div>
                </div>
              </div>
              <p className="text-gray-400 dark:text-gray-500 mb-4">
                Penyedia Layanan Internet terkemuka yang menghadirkan solusi konektivitas
                berkecepatan tinggi dan terpercaya untuk pelanggan residensial dan bisnis di seluruh Indonesia.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors">
                  Instagram
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Informasi Kontak</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-500">
                  <Phone className="h-4 w-4" />
                  <span>(021) 555-0123</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-500">
                  <Mail className="h-4 w-4" />
                  <span>info@mitramediadata.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                © 2024 PT. Mitra Media Data. Semua hak dilindungi.
              </p>
              <div className="flex space-x-6 mt-2 md:mt-0">
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 text-sm transition-colors">
                  Kebijakan Privasi
                </a>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 text-sm transition-colors">
                  Syarat Layanan
                </a>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 text-sm transition-colors">
                  Dukungan
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;