import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Menu from './components/Menu';
import Home from './pages/Home';
import TechnoAdd from'./pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import './css/app.css';
import useLocalStorage from './hooks/useLocalStorage';


function App() {
  const [technos, setTechnos] = useState([]);
  const STORAGE_KEY = 'technos';
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);

  useEffect(() => {
    setTechnos(storedTechnos);
    console.log('useEffect with []');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setStoredTechnos(technos);
    console.log('useEffect with [technos]');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [technos]);

  function handleAddTechno (techno) {
    //console.log("handleAddTechno:", techno);
    setTechnos([...technos, {...techno, technoid: uuidv4()}]);
  }

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
