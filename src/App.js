import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import  Open  from './pages/open';
import Home from './pages/home';
import Join from './pages/join';
import Calculator from './pages/calculator';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/open' element={ <Open />}/>
          <Route  path='/join' element={ <Join />} />
          <Route  path='/calorie' element={ <Calculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
