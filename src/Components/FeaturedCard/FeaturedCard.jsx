import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCircleDollarToSlot, faDollar } from '@fortawesome/free-solid-svg-icons'

const FeaturedCard = ({ job }) => {
    console.log(job)
    const { position, company, job_location, job_type, location, salary } = job;
    return (
        <div className='col-md-6'>
            <div className='border mb-4 rounded-2 p-3'>
                <h2>{position}</h2>
                <p>{company}</p>
                <Button variant="outline-primary me-3">{job_location}</Button>
                <Button variant="outline-primary">{job_type}</Button>
                <div className='d-flex gap-4 my-3'>
                    <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                    <p><FontAwesomeIcon icon={faDollar} />  {salary}</p>
                </div>
                <Button variant="primary">View Details</Button>
            </div>
        </div>
    );
};

export default FeaturedCard;