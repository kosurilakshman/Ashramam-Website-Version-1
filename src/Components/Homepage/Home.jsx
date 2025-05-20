import React from 'react';
import Services from './Services/Services';
import Article from './our articles/Article';
import Gallery from './gallery/Gallery';
import '../Homepage/gallery/Gallery.css'
import Trust from './Trust/Trust';

const Home = () => {
    return (
        <>
        <Services/>
        <Article/>
        <Gallery/>
        <Trust/>
            
        </>
    );
};

export default Home;
