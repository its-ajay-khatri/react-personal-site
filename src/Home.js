import React from "react";
import web from '../src/images/img2.svg';
import { Link } from 'react-router-dom';
import MainSectionComponent from "./MainSectionComponent";
const Home = (props) => {
    return(
        <>
           <MainSectionComponent 
            name="Grow Your Business With" 
            imgsrc={ web } 
            visit="/services" 
            btnname="Get Started"     
        />
        </>
    )
};


export default Home;