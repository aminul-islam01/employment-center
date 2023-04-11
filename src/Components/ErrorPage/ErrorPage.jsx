import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrinStars } from '@fortawesome/free-solid-svg-icons';

const ErrorPage = () => {
    const { error, status } = useRouteError()
  return (
    <section className='d-flex align-items-center p-4 section'>
      <div className='px-2 mx-auto my-3'>
      <FontAwesomeIcon icon={faFaceGrinStars} className='error-emoji' /> 
        <div className='max-w-md text-center'>
          <h2 className='mb-2 fw-bold fs-2 text-warning'>
            <span>Error</span>
            {status || 404}
          </h2>
          <p className='fs-2 fw-bold md:text-3xl text-danger mb-4'>
            {error?.message}
          </p>
          <Link to='/'>
            <Button variant='primary'>Back to homepage</Button>
          </Link>
        </div>
      </div>
    </section>
  )
};

export default ErrorPage;