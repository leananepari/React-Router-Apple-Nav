import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ProductWrap = styled.div`

a:link {
  color: #111;
  text-decoration: none; 
}

a:visited {
  color: #111; 
}

a:hover {
  // cursor: pointer;
  color: #0070c9; 
  }
`

function Product({ title, image, newProduct }) {
  
  return (
    <ProductWrap style={{padding: '0 20px 0 20px'}}>
      <img src={image} alt='product' />
      <NavLink to={`/${title.toLowerCase().split(/\s+/).join('-')}`} className="link" ><p style={{fontSize: '11px', fontWeight: '400', 
                       fontFamily: '"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial", sans-serif"'}}
                       >
               {title}</p>
      </NavLink>
      {/* <p style={{fontSize: '9px', color: 'red', margin: '0'}}>{newProduct}</p> */}
    </ProductWrap>
  );
}

export default Product;