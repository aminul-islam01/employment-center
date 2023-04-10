import React, { useContext } from 'react';
import { CartContext, JobContext } from '../../App';

const Details = () => {
    const featured = useContext(JobContext);
    const [cart, setCart] = useContext(CartContext)
    const {position, description, responsibilities, education, experience, salary} = cart;
    console.log(cart)
    console.log(featured)
    return (
        <div className='row'>
            <div className='col-md-8'>
                <p><strong>Job Description:</strong> {description}</p>
                <p><strong>Job Responsibilities:</strong> {responsibilities}</p>
                <p><strong>Educational Requirements:</strong><br />
                {education}
                </p>
                <p><strong>Experience:</strong><br />
                {experience}
                </p>
            </div>
            <div className='col-md-4 '>
                <h3>Job Details</h3>
                <p>{position}</p>
            </div>
        </div>
    );
};

export default Details;