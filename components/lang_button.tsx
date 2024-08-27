// src/components/LanguageDropdown.tsx
import React, { useState } from 'react';

const LanguageDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('es');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setIsOpen(false); // Cierra el menú después de seleccionar un idioma
  };

  return (
    <div className="language-dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        {language === 'es' ? '🇪🇸 Español' : '🇬🇧 English'}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <button onClick={() => changeLanguage('es')} className="dropdown-item">
            🇪🇸 Español
          </button>
          <button onClick={() => changeLanguage('en')} className="dropdown-item">
            🇬🇧 English
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
