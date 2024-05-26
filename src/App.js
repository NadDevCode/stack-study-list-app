import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Menu from './components/Menu';
import Home from './pages/Home';
import TechnoAdd from'./pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import './css/app.css';


function App() {

  const [technos, setTechnos] = useState([]);

  function handleAddTechno (techno) {
    //console.log("handleAddTechno:", techno);
    setTechnos([...technos, {...techno, technoid: uuidv4()}]);
  }
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/add' element={<TechnoAdd handleAddTechno = {handleAddTechno} /> } />
        <Route path='/list' element={<TechnoList technos = {technos} />} />
      </Routes>
    </>
  );   
}

export default App;
