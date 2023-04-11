import Button from 'react-bootstrap/Button';
import React, { useContext } from 'react';
import { CartContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar, faPhone, faLocationDot, faEnvelope, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { getJobs } from '../../utilities/common';
import { toast } from 'react-toastify';

const Details = () => {
    const [cart, setCart] = useContext(CartContext)
    const { description, responsibilities, education, experience, salary, position, contact } = cart;

    // console.log(cart)


    const handApplyJob = () => {
        const storeJobs = getJobs();

        const exists = storeJobs.find(Id => Id === cart.id);
        if (!exists) {
            let newArray = [cart.id, ...storeJobs];
            // set data to localStorage
            localStorage.setItem('jobs', JSON.stringify(newArray));
        }
        else {
            toast("Already apply this Job");
        }

    }

    return (
        <>
        <h3 className='py-5 text-center gray'>Job Details</h3>
            <div className='row mt-5 px-2'>
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
                <div className='col-md-4'>
                    <div className='p-3  rounded-2 gray'>
                        <h5 className='border-bottom border-2 pb-3 fw-bold'>Job Details</h5>
                        <p>
                            <FontAwesomeIcon icon={faDollar} className='text-primary' /> <strong>Salary:</strong> {salary}
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCalendar} className='text-primary' />
                            <strong> Job Title:</strong> {position}
                        </p>
                        <h5 className='border-bottom border-2 py-3 fw-bold'>Contact Information</h5>
                        <p>
                            <FontAwesomeIcon icon={faPhone} className='text-primary' />
                            <strong> Phone:</strong> {contact?.phone}</p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className='text-primary' />
                            <strong> Email:</strong> {contact?.email}
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faLocationDot} className='text-primary' />
                            <strong> Address:</strong> {contact?.address}
                        </p>
                    </div>
                    <Button onClick={handApplyJob} variant="primary mt-3 w-100">Apply Now</Button>
                </div>
            </div>
        </>
    );
};

export default Details;