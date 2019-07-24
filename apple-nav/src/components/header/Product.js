import React from 'react';
import styled from 'styled-components';

function Product({ title, image }) {
  return (
    <div style={{padding: '0 20px 0 20px'}}>
      <img src={image} alt='product' />
      <p style={{fontSize: '12px', fontWeight: '500', color: '#111'}}>{title}</p>
    </div>
  );
}

export default Product;