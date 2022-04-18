import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Subject from "./Subject/Subject";

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("subjects.json")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);
  return (
    <div>
      <h1 className="text-center mt-4 mb-5">
        All the subjects that are taught
      </h1>
      <div className="container px-4">
        <div className="row g-5">
          {subjects.map((subject) => (
            <Subject key={subject.id} subject={subject}></Subject>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
