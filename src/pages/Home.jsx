import React from 'react';
import Hero from '../components/Hero/Hero';
import LatestProducts from '../components/LatestProducts/LatestProducts';
import Navbar from '../components/navbar/Navbar';
import Products from '../components/product/Product';

const  Home = ({products,latestProducts}) => {
    console.log(products);
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Products  products={products}/>
            <LatestProducts latestProducts={latestProducts}/>

         
        </div>
    )
}

export default Home
        