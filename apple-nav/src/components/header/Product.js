import React from 'react';
import styled from 'styled-components';

function Product({ title, image }) {
  return (
    <div style={{padding: '0 20px 0 20px'}}>
      <img src={image} alt='product' />
      <p style={{fontSize: '11px', fontWeight: '400', color: '#111', fontFamily: '"SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial", sans-serif"'}}>{title}</p>
    </div>
  );
}

export default Product;