import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Footer from '../../shared/Footer/Footer';

const Checkout = () => {

    const handelCheckOut = (event) =>{
        event.preventDefault();
        toast("Success Enroll It");
    }

    return (
        <div>
            <div className="form-container h-100 ">
      <div className="d-flex justify-content-center mt-5">
        <form className="w-50 form p-5" onSubmit={handelCheckOut}>
          <h2 className="text-center mb-3">Check Out</h2>

          <div className="form-group mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              
            />
          </div>
          <div className="form-group mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              
            />
          </div>
          <div className="form-group mb-3">
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter phone number"
              
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary btn-block mb-3"
            value="Submit"
          />
          
            
            </form>
            </div>
            <ToastContainer />
    </div>
            
            <Footer></Footer>
            </div>
    );
};

export default Checkout;