import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="form-container h-100 ">
      <div className="d-flex justify-content-center mt-5">
        <form className="w-50 form p-5">
          <h2 className="text-center mb-3">Sign Up</h2>
          <div className="form-group mb-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              name="Confirm Password"
              className="form-control"
              placeholder="Enter confirm password"
              required
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary btn-block mb-3"
            value="Submit"
          />
          

            <p className="forgot-password text-right">
              Already have account? Please <Link className="text-decoration-none" to="/login">Sign In</Link>
            </p>
        </form>
      </div>
    </div>
    );
};

export default Registration;