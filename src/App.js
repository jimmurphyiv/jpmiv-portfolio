import React from 'react';
import routes from './routes';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Connect from './Components/Connect/Connect';
import Links from './Components/Links/Links';
import './App.css';

function App() {
  return (
    <div className="App">
     {routes}
     <Header />
     <Nav />
     <About />
     <Connect />
     <Links />
    </div>
  );
}

export default App;
