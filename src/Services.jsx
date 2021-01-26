import React from 'react';
import { NavLink } from 'react-router-dom';
import email from "../src/Images/email.jpg";
import front from "../src/Images/front.jpg";

const Services = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                    Our Services
                </h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-md-4 col-10 mx-auto">
                        
                    <div class="card">
                        <img src={front} class="card-img-top img-fluid animated" alt="..."/>
                        <div class="card-body">
                            <h3 class="card-title">Front-End Development</h3>
                            <p class="card-text">Get a user frinedly front end for your website with technologies HTML5, CSS3, Bootstrap 5, Modern JavaScript and React JS.</p>
                            <NavLink to="/contact" class="btn btn-outline-info">Get Service Now</NavLink>
                        </div>
                        </div>

                    </div>


                    <div className="col-md-4 col-10 mx-auto">
                        
                    <div class="card">
                        <img src={email} class="card-img-top img-fluid animated" alt="..."/>
                        <div class="card-body">
                            <h3 class="card-title">HTML Email Template</h3>
                            <p class="card-text">Get multipurpose marketing email HTML templates and it's helping me to generate new ideas about the designing.</p>
                            <NavLink to="/contact" class="btn btn-outline-info">Get Service Now</NavLink>
                        </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    );
}

export default Services;