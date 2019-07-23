import React from 'react';
import { Link } from 'react-router-dom';


function Nav({ tab }) {
  return (
    <div>
      <Link to={`/${tab.toLowerCase()}`}style={{color: 'white', padding: '0 40px 0 40px', textDecoration: 'none'}}>{tab}</Link>
    </div>
  );
}

export default Nav;