import React from 'react';
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='d-md-flex align-items-center justify-content-between mb-5 px-2  gray'>
            <div className='col-md-5 banner-content'>
                <h2 className='display-4 fw-bold mb-4'>The Next Step <br /> Towards Your <br /> <span className='text-primary'>Dream Job</span></h2>
                <p>The Ultimate Job Search Experience. Discover Your Future with Our Comprehensive Job Database and Manage Your Applications with Ease.</p>
                <Button className='btn-primary btn-lg'>Get Started</Button>
            </div>
            <img src="/cta-1.png" className='banner-img' alt="" />
        </div>
    );
};

export default Banner;