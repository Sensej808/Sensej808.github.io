import React from 'react';
import { Mail, Phone, MapPin, Globe, Github, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Header = ({ data }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="resume-header">
      <div className="container">
        <div className="header-content">
          <div>
            <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
            <p className="text-xl text-secondary mb-4">{data.title}</p>
            <p className="text-lg mb-6 max-w-2xl">{data.summary}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>{data.email}</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>{data.phone}</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>{data.location}</span>
              </div>
              <div className="contact-item">
                <Globe className="contact-icon" />
                <span>{data.website}</span>
              </div>
              <div className="contact-item">
                <Github className="contact-icon" />
                <span>{data.github}</span>
              </div>
            </div>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="theme-toggle no-print"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;