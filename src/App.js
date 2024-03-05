import { Route ,Routes} from 'react-router-dom';
import './App.css';
// import Home from './components/Home';
// import About from './components/About';
// import Help from './components/Help';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
  <Navbar/>
  <Home/>
  </>
   
  );
}

export default App;
