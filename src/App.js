import './App.css';
import {useState} from 'react';
import {HashRouter, Route, Routes, Navigate} from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [headerIndex, setHeaderIndex] = useState(false);

  return (
    <HashRouter>
      <Nav layout setLoaded={setLoaded} headerIndex={headerIndex} />
      <Routes>
        <Route path='/' element={<Home loaded={loaded} />} />
        <Route path='/home' element={<Navigate to='/' />} />
        <Route
          path='/services'
          element={<Services setHeaderIndex={setHeaderIndex} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
