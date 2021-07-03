import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Dropdown from './Components/Dropdown';
import Home from './Pages';
import {Switch, Route} from 'react-router-dom';
import About from './Pages/about';
import Menu from './Pages/menu';
import { useEffect, useState } from 'react';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  });

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;
