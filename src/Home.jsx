import React from 'react';
import {NavLink} from 'react-router-dom';
import web from "../src/Images/move.svg";

const Home = () => {

    return (
        <>
            <section id="header" className="d-flex align-items-center">
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='col-10 mx-auto popup'>
                        <div className='row'>
                            <div className='col-md-6 pt-5 order-2 order-lg-1 d-flex flex-column justify-content-center'> {/*pt-lg-0 order-2 order-lg-1*/}
                                    <h1>
                                        "Big Or Small, Grow All."
                                        <strong className="brand-name"> Wajahat Mubashir</strong>
                                    </h1>
                                    <h4 className="my-3">
                                        An Inovative Web Developer
                                    </h4>
                                    <div className="mt-3">
                                        <NavLink to="/services" className="btn-get-started">
                                            Get Started
                                        </NavLink>
                                    </div>
                                </div>

                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={web} className='img-fluid animated' alt="Home Image"/>
                            </div>
                        </div>
                     </div>
		        </div>
			</div>

            </section>
        </>
    );
}

export default Home;