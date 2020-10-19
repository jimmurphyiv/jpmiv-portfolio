import React from 'react';
import routes from './routes';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import './App.scss';

function App() {
  return (
    <div className="header">
      <Header />

      <div className='nav-bar'>
        <Nav />
      </div>

      <div className='routes'>
        {routes}
      </div>

    </div>
  );
}

export default App;
