import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import  Open  from './pages/open';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />
          <Route path='/open' element={ <Open />}/>
          <Route />
        </Routes>
      </Router>
      <p className='about'>At [Your Gym's Name], we believe that fitness is not just a destination; it's a journey, and we're here to guide you every step of the way. Our state-of-the-art facility is more than just a gym; it's a community where individuals come together to pursue their fitness goals, challenge their limits, and transform their lives. Whether you're a seasoned fitness enthusiast or just starting your wellness journey, our dedicated team is committed to providing you with the tools, support, and motivation you need to succeed. Join us and discover a place where your fitness aspirations become a reality.</p>
    </div>
  );
}

export default App;
