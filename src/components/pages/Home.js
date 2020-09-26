import React from 'react';
import Handbook from './../other/HandBook';
import Products from './Products';

const Home = () => (
    <>
        <img src="/assets/img/quy-nhon-1.png" className="img-fluid" alt="Responsive img 1" />
        <div className="container marketing">
            <Handbook />
            <Products />
        </div>
    </>
)

export default Home