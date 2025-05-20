import React from 'react';
import TempleHero from './TempleHero/TempleHero';
import TempleSection from './Templesection/TempleSection';
import GayatriMandir from './gayatrimandir/GayatriMandir';
import ShivaMandir from './shivamandir/ShivaMandir';



const Temple = () => {
    return (
        <>
       <TempleHero/>
       <TempleSection/>
       <GayatriMandir/>
       <ShivaMandir/>
            
        </>
    );
};

export default Temple;