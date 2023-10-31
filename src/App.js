import './App.css';
import {useEffect} from 'react';
import {HashRouter} from 'react-router-dom';
import {Data} from './Components/Context';
import Header from './Components/Header/Header';
import RoutesComponent from './Components/RoutesComponent';
import Footer from './Components/Footer/Footer';

function App() {
  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);

  return (
    <HashRouter>
      <Data>
        <Header />
        <RoutesComponent />
        <Footer />
      </Data>
    </HashRouter>
  );
}

export default App;
