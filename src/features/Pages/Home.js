import React from 'react';
import Navbar from '../navbar/Navbar';
import ProductList from '../product/components/ProductList';

export default function Home() {
  return (
    <Navbar>
        <ProductList></ProductList>
    </Navbar>
  )
}
