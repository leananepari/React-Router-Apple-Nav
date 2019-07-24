import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const SubNavWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
  background-color: #f6f6f6;
  padding-top: 60px;
`

function SubNav({ products }) {
  return (
    <SubNavWrap>
      {products.map((product, index) => {
        return <Product key={index} title={product.title} image={product.image}/>
      })}
    </SubNavWrap>
  );
}

export default SubNav;