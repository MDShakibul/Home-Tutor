import React from 'react';
import { Col } from 'react-bootstrap';
import './Subject.css'

const Subject = ({subject}) => {
    const {img, name, no_of_class, price} = subject;
    return (
        
        <Col lg={3} md={4} sm={6} xs={12} className='text-center subject-container p-0'>
        
            <div className='images'>
                <img src={img} alt="" className='bg-danger' />
            </div>

            <div>
                <p>{name}</p>
                <p>{no_of_class}</p>
                <p>{price}</p>
            </div>

            
        
        </Col>
        
    );
};

export default Subject;