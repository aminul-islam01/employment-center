import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons'
import './AppliedJobsItem.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';

const AppliedjobsItem = ({job}) => {
    const { position, company, job_location, job_type, location, salary, logo } = job;

    const [cart, setCart] = useContext(CartContext);
    const detailsHandler = () => {
        setCart(job)
    }
    
    return (
        <div className='job-item'>
            <img src={logo} alt="" />
            <div className='job-content'>
                <h2>{position}</h2>
                <p>{company}</p>
                <Button variant="outline-primary me-3">{job_location}</Button>
                <Button variant="outline-primary">{job_type}</Button>
                <div className='d-flex gap-4 my-3'>
                    <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                    <p><FontAwesomeIcon icon={faDollar} /> Salary: {salary}</p>
                </div>
            </div>
            <Link to='/job-details'>
                    <Button onClick={detailsHandler} variant="primary">View Details</Button>
            </Link>
        </div>
    );
};

export default AppliedjobsItem;