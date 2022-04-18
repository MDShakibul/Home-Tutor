import React from 'react';

const ContactUs = () => {
    return (
        <div>
        <h2 className='text-center mt-5 mb-3'>For any Question please contact us</h2>

        <section className="container margin-bottom">
        <div className="form-control mb-3">
          
          <label htmlFor="floatingInput">contactus@gmail.com</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Subject</label>
        </div>

        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label htmlFor="floatingTextarea">Comments</label>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary my-3 px-4">Send</button>
        </div>
      </section>
            
        </div>
    );
};

export default ContactUs;