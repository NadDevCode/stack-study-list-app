import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Menu from './components/Menu';
import Home from './pages/Home';
import TechnoAdd from'./pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import './css/app.css';

// Importation d'un hook personnalisé pour la gestion des données locales
import useLocalStorage from './hooks/useLocalStorage'; 


function App() {
  const [technos, setTechnos] = useState([]);

  // Clé de stockage pour les technologies dans le local storage
  const STORAGE_KEY = 'technos';

  // Utilisation du hook personnalisé pour synchroniser l'état avec le local storage
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);

  // Charge les données au montage du composant
  useEffect(() => {
    setTechnos(storedTechnos);
    console.log('useEffect with []');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Actualise les données lorsque l'état des technologies change
  useEffect(() => {
    setStoredTechnos(technos);
    console.log('useEffect with [technos]');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [technos]);

  // Ajoute une nouvelle technologie
  function handleAddTechno (techno) {
    //console.log("handleAddTechno:", techno);
    setTechnos([...technos, {...techno, technoid: uuidv4()}]);
  }
  
  //Suppression 
  function handleDeleteTechno(id) {
    setTechnos(technos.filter((tech) => tech.technoid !== id))
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/add' element={<TechnoAdd handleAddTechno = {handleAddTechno} /> } />
        <Route path='/list' element={<TechnoList technos = {technos} handleDeleteTechno = {handleDeleteTechno} />} />
      </Routes>
    </>
  );   
}

export default App;
