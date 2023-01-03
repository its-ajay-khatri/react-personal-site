import React from "react";
import { Link } from 'react-router-dom';
import './index.css'
const Navbar = (props) => {
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">               
                    <nav class="navbar navbar-expand-lg navbar-light">
                    <Link to="/" className="navbar-brand">AjayKhatri</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item active">
                                <Link to="/" activeClassName="menu_active" className="nav-link">Home</Link>
                                </li>
                                <li class="nav-item">
                                <Link to="/about" activeClassName="menu_active" className="nav-link">About</Link>
                                </li>
                                <li class="nav-item">
                                <Link to="/contact" activeClassName="menu_active" className="nav-link">Contact</Link>
                                </li>
                                <li class="nav-item">
                                <Link to="/services" activeClassName="menu_active" className="nav-link">Service</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

            
        </>
    )
};

export default Navbar;