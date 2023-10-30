import {useEffect} from 'react';
import Home from '../Components/Home';
import Services from '../Components/Services';
import About from '../Components/About';
import Contact from '../Components/Contact';
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';

function RoutesComponent() {
  const location = useLocation();
  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Navigate to='/' />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default RoutesComponent;
