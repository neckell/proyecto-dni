import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

// Componente para la pantalla inicial con el botón "Ver DNI Digital"
const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleVerDniClick = () => {
    navigate('/dni');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    //   padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      maxWidth: '400px',
      width: '100%',
      boxSizing: 'border-box'
    }}
    onClick={handleVerDniClick}>
      <div style={{ marginBottom: '20px', width: '100%' }}>
        <img
          src="./image_1.png" // Asegúrate de que esta imagen esté en la carpeta 'public'
          alt="Documentos"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    </div>
  );
};

// Componente para la pantalla del DNI Digital
const DniScreen: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    //   padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      maxWidth: '400px',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <img
        src="/image_4.png" // Asegúrate de que esta imagen esté en la carpeta 'public'
        alt="DNI Digital"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
      {/* Puedes agregar más elementos o información si es necesario */}
    </div>
  );
};

// Componente principal de la aplicación con rutas
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/dni" element={<DniScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

// Renderizado de la aplicación
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);