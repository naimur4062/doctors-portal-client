import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        // <nav class="navbar navbar-expand-lg navbar-light">
        //     <div class="container-fluid">
        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        //                 <li class="nav-item">
        //                     <a class="nav-link ms-5" href="#">Home</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link ms-5" href="#">About</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link ms-5" href="#">Dental Services</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link ms-5 text-white" href="#">Reviews</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link ms-5 text-white" href="#">Blog</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link ms-5 text-white" href="#">Contact Us</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

        <nav className="navbar navbar-expand-lg navbar-light">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                    <Link className="nav-link ms-5" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-5" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-5" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-5 text-white" to="/dashboard">Admin</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-5 text-white" to="#">Blogs</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link ms-5 text-white" to="#">Contact Us</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
};

export default NavBar;