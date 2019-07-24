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
  padding-top: 40px;
`

function SubNav({ products }) {
  return (
    <SubNavWrap>
      {products.map((product, index) => {
        return <Product key={index} title={product.title ? product.title : 'Title'} 
                                    image={product.image ? product.image : ''}
                                    newProduct={product.new ? product.new : ''}
                />
      })}
    </SubNavWrap>
  );
}

export default SubNav;