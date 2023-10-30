import './App.css';
import {useEffect} from 'react';
import {HashRouter} from 'react-router-dom';
import {Data} from './Components/Context';
import Nav from './Components/Nav';
import RoutesComponent from './Components/RoutesComponent';
import Footer from './Components/Footer';

function App() {
  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);

  return (
    <HashRouter>
      <Data>
        <Nav />
        <RoutesComponent />
        <Footer />
      </Data>
    </HashRouter>
  );
}

export default App;
