import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav({ tab }) {
  return (
    <div>
      <NavLink to={`/${tab.toLowerCase()}`}
               style={{color: 'white', padding: '0 40px 0 40px', textDecoration: 'none'}}
               activeStyle={{color: '#b2b2b2'}}>
               {tab}
      </NavLink>
    </div>
  );
}

export default Nav;