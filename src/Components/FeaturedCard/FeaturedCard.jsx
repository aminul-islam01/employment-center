import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../App';


const FeaturedCard = ({ job }) => {
    const [cart, setCart] = useContext(CartContext);
    const detailsHandler = () => {
        setCart(job)
        // console.log(job)
    }
    
    const { position, company, job_location, job_type, location, salary, logo } = job;
    return (
        <div className='col-md-6'>
            <div className='border mb-4 rounded-2 p-3'>
                <img src={logo} className='logo' alt="" />
                <h2>{position}</h2>
                <p>{company}</p>
                <span className='border border-primary rounded-1 p-1 text-primary me-3'>{job_location}</span>
                <span className='border border-primary rounded-1 p-1 text-primary'>{job_type}</span>
                <div className='d-flex gap-4 my-3'>
                    <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                    <p><FontAwesomeIcon icon={faDollar} /> Salary: {salary}</p>
                </div>
                <Link to='/job-details'>
                    <Button onClick={detailsHandler} variant="primary">View Details</Button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedCard;