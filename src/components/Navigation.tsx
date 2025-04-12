import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600';
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CareerPath AI</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/resources" className={isActive('/resources')}>Resources</Link>
            <Link to="/mentorship" className={isActive('/mentorship')}>Mentorship</Link>
            <Link
              to="/"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              onClick={(e) => {
                e.preventDefault();
                const assessmentSection = document.getElementById('assessment-section');
                if (assessmentSection) {
                  assessmentSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Home</Link>
            <Link to="/resources" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Resources</Link>
            <Link to="/mentorship" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Mentorship</Link>
            <Link
              to="/"
              className="block w-full mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-center"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                const assessmentSection = document.getElementById('assessment-section');
                if (assessmentSection) {
                  assessmentSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;