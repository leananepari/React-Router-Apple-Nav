import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import NavWrapper from './components/header/NavWrapper';
import tabsData from './data/tabs';

import SubNav from './components/header/SubNav';
import { macs, ipads, iphones, watches, tvs, music } from './data/products';

import MacbookAir from './components/product-pages/mac/MacbookAir';

function App() {
  return (
    <div className="App">
      <NavWrapper tabs={tabsData}/>

      <Route path='/' exact />
      <Route path='/mac' component={(props) => <SubNav {...props} products={macs}/> }/>
      <Route path='/ipad' component={(props) => <SubNav {...props} products={ipads}/> }/>
      <Route path='/iphone' component={(props) => <SubNav {...props} products={iphones}/> } />
      <Route path='/watch' component={(props) => <SubNav {...props} products={watches}/> }/>
      <Route path='/tv' component={(props) => <SubNav {...props}  products={tvs}/> }/>
      <Route path='/music' component={(props) => <SubNav {...props} products={music}/> }/>
      <Route path='/support' />

      <Route path='/macbook-air' component={MacbookAir}/>
      <Route path='/macbook-pro'/>
      <Route path='/imac' />
    </div>
  );
}

export default App;
