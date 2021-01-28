import React from 'react';
import {NavLink} from 'react-router-dom';
import man from "../src/Images/man.svg";

const About = () => {

    return (
        <>
            <section id="header" className="d-flex align-items-center">
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='col-10 mx-auto popup1'>
                        <div className='row'>
                            <div className='col-md-6 pt-5 order-2 order-lg-1 d-flex flex-column justify-content-center'> {/*pt-lg-0 order-2 order-lg-1*/}
                                    <h1>
                                        <strong className="brand-name"> About </strong>
                                    </h1>

                                    <p id="resCenter">
                                    An articulate and quick thinking young person who has a natural flair for being able to communicate and build relationships. I'm a web developer having expertise in HTML5, CSS3, JavaScript, Bootstrap5, Sass, and Material UI React. Looking towards to work with you. <br/>
                                    I turn the code into the structure. Bringing mock-ups to life using HTML, CSS, JavaScript Identifying innovative ideas and proof of concepts according to project requirements.<br/>
                                    Maintaining an organized workflow using a project management tool (like GitHub). Collaborating closely with the team to support projects during all phases of delivery. I am looking for a company willing to offer me a placement among their developers. In return, I would offer my full commitment, and be a pleasant and friendly addition to your team.<br/>
                                    </p>

                                    <div className="mt-3">
                                        <a href="https://github.com/WajahatMubashir" target="_blank" className="btn-get-started">
                                            GitHub Profile
                                        </a>
                                    </div>
                                </div>

                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={man} className='img-fluid animated' alt="About Image"/>
                            </div>
                        </div>
                     </div>
		        </div>
			</div>

            </section>
        </>
    );
}

export default About;