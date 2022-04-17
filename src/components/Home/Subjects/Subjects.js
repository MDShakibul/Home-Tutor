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
      <h1 className="text-center mt-4 mb-5">All the subjects that are taught</h1>

      {<Container>
        <Row lg={{ gutterX: 5 }} md= {{ gutterX: 5 }} sm={{ gutterX: 5 }}>
          {subjects.map((subject) => (
            <Subject key={subject.id} subject={subject}></Subject>
          ))}
        </Row>
      </Container>}
    </div>
  );
};

export default Subjects;
