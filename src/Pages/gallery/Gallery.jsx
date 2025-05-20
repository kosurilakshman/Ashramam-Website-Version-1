import React from 'react';

import Gallerycarosuel from './gallerycarosuel/Gallerycarosul';
import Gallerygrid from './gallerygrid/Gallerygrid';
import Galleryhero from './galleryhero/Galleryhero';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import Images from './Gallery/Images'

const Gallery = () => {
    return (
        <>
        <Galleryhero/>
        <Gallerycarosuel/>
        <Gallerygrid/>
        <DescriptionSection/>
        <Images/>
            
        </>
    );
};

export default Gallery;