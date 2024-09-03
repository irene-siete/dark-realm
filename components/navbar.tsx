// src/components/Navbar.tsx
import React, { useState } from 'react';
import './navbar_style.css'; // Asegúrate de que la ruta sea correcta
import Dropdown from './dropdown';

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const changeLanguage = (lang: 'es' | 'en') => {
    setLanguage(lang);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Dark Realm</div>
        <div className="spacer" />
        <Dropdown onSelect={changeLanguage} />
      </div>
    </nav>
  );
};

export default Navbar;
