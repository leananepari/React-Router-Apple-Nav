import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import NavWrapper from './components/header/NavWrapper';
import tabsData from './data/tabs';

import SubNav from './components/header/SubNav';
import { macs, ipads } from './data/products';

function App() {
  return (
    <div className="App">
      <NavWrapper tabs={tabsData}/>
      <Route path='/' exact />
      <Route path='/mac' component={(props) => <SubNav {...props} products={macs}/> }/>
      <Route path='/ipad' component={(props) => <SubNav {...props} products={ipads}/> }/>
      <Route path='/iphone' component={(props) => <SubNav {...props} /> } />
      <Route path='/watch' component={(props) => <SubNav {...props} /> }/>
      <Route path='/tv' component={(props) => <SubNav {...props} /> }/>
      <Route path='/music' component={(props) => <SubNav {...props}/> }/>
      <Route path='/support' />
    </div>
  );
}

export default App;
