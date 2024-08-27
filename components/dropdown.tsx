// src/components/Dropdown.tsx
import React, { useState } from 'react';
import './navbar_style.css'; // Asegúrate de que la ruta sea correcta

const Dropdown: React.FC<{ onSelect: (lang: 'es' | 'en') => void }> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleSelect = (lang: 'es' | 'en') => {
    onSelect(lang);
    setIsOpen(false); // Cierra el menú desplegable después de seleccionar un idioma
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleMenu}>
        language
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li><button onClick={() => handleSelect('es')}>Español</button></li>
          <li><button onClick={() => handleSelect('en')}>English</button></li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
