import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const SubNavWrap = styled.div`
  width: 100%;
  height: 160px;
  background-color: #f6f6f6;
`

function SubNav({ products }) {
  return (
    <SubNavWrap>
      {/* {products.map(product => {
        return <Product product={product} />
      })} */}
    </SubNavWrap>
  );
}

export default SubNav;