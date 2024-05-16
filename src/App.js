import Home from './pages/Home';
import TechnoAdd from'./pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import './css/app.css';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Menu />
      <Home />
      <TechnoAdd />
      <TechnoList />
    </>
  );   
}

export default App;
