import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handelSignIn = event =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  let from = location.state?.from?.pathname || "/";

  if(user){
    navigate(from, { replace: true });
  }
  return (
    <div className="form-container h-100 ">
      <div className="d-flex justify-content-center mt-5">
        <form className="w-50 form p-5" onSubmit={handelSignIn}>
          <h2 className="text-center mb-3">Sign In</h2>
          <div className="form-group mb-3">
            <label>Email address</label>
            <input
              type="email"
              ref={emailRef}
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              ref={passwordRef}
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
          <SocialLogin></SocialLogin>
        </form>
      </div>
      
    </div>
  );
};

export default Login;
