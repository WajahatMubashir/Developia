import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="headcenter">
                    Contact 
                </h1>
            </div>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-10 mx-auto'>

                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe"/>
                            </div>

                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="000-000-0000-000"/>
                            </div>

                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>

                            <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div class="col-12">
                            <button class="btn btn-outline-success" type="submit">Submit form</button>
                            </div>
	            </div>
		    </div>
		</div>
        </>
    );
}

export default Contact;