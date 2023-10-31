import './App.css';
import {useEffect} from 'react';
import {HashRouter} from 'react-router-dom';
import {Data} from './components/Context';
import Header from './components/Header/Header';
import RoutesComponent from './components/RoutesComponent';
import Footer from './components/Footer/Footer';

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
