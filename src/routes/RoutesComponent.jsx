import {useEffect} from 'react';
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import Home from '../components/Home/Home';
import Services from '../components/Services/Services';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

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
