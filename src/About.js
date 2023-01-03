import React from "react";
import MainSectionComponent from "./MainSectionComponent";
import web from '../src/images/img2.svg';
const About = (props) => {
    return(
        <MainSectionComponent 
            name="Welcome to About Page" 
            imgsrc={ web } 
            visit="/contact" 
            btnname="Contact Now"     
        />
    )
};


export default About;