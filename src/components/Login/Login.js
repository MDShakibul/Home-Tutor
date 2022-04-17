import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container h-100 ">
      <div className="d-flex justify-content-center mt-5">
        <form className="w-50 form p-5">
          <h2 className="text-center mb-3">Sign In</h2>
          <div className="form-group mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary btn-block mb-3"
            value="Submit"
          />
          <div className="d-flex justify-content-between">
            <p className="forgot-password text-right">
              Forgot <Link className="text-decoration-none" to="#">password?</Link>
            </p>

            <p className="forgot-password text-right">
              You have no account? Please <Link className="text-decoration-none" to="/registration">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
