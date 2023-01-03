import React from "react";
import web from '../src/images/img2.svg';
import { Link } from 'react-router-dom'
const MainSectionComponent = (props) => {
    return(
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justfy-content-center flex-column">
                                    <h1 className="heading-class">
                                       {props.name} <stong className="brand-name">AjayKhatri</stong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are a team of talented developers developing websites
                                    </h2>
                                    <div className="mt-3 btn-class">
                                        <Link to={props.visit} className="btn-get-started">{props.btnname}</Link>

                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="Home img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};


export default MainSectionComponent;