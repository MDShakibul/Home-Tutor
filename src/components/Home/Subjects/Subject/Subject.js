import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Subject.css";

const Subject = ({ subject }) => {
  const { img, name, description, price } = subject;
  return (
    

    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
      <div className="d-flex justify-content-center">
        <div>
        <div className="images">
        <img src={img} alt="" className="bg-danger" />
      </div>
      <div>
        <p>Subject: {name}</p>
        <p>Class Info: {description}</p>
        <p> Cost: {price}</p>
      </div>
        </div>
      </div>

      <Link to="/checkout" className="d-flex justify-content-center">
        <button className="btn btn-primary"> Enroll</button>
      </Link>
    </div>
  );
};

export default Subject;
