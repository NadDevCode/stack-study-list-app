import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import TechnoAdd from'./pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import './css/app.css';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/add' element={<TechnoAdd /> } />
        <Route path='/list' element={<TechnoList />} />
      </Routes>
    </>
  );   
}

export default App;
