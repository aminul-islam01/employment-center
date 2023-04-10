import React, { useContext } from 'react';
import { CartContext, JobContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar, faPhone } from '@fortawesome/free-solid-svg-icons'

const Details = () => {
    const featured = useContext(JobContext);
    const [cart, setCart] = useContext(CartContext)
    const {description, responsibilities, education, experience, salary, position, contact} = cart;
    console.log(cart)
    console.log(featured)
    return (
        <div className='row mt-5'>
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
            <div className='col-md-4 p-3 bg-secondary bg-opacity-25 rounded-2'>
                <h5 className='border-bottom border-2 pb-3 fw-bold'>Job Details</h5>
                <p><FontAwesomeIcon icon={faDollar} className='text-primary'/> <strong>Salary:</strong> {salary}</p>
                <p> <strong>Job Title:</strong> {position}</p>
                <h5 className='border-bottom border-2 py-3 fw-bold'>Contact Information</h5>
                <p>
                <FontAwesomeIcon icon={faPhone} className='text-primary'/>  
                    <strong> Phone:</strong> {contact?.phone}</p>
                <p><strong>Email:</strong> {contact?.email}</p>
            </div>
        </div>
    );
};

export default Details;