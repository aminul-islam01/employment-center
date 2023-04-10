import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Featured = () => {
    const [featured, setFeatured] = useState([]);
    const data = useLoaderData();
    useEffect(()=> {
        const dataLimit = data.slice(0,4);
        setFeatured(dataLimit)
    }, [])
    const handleShowAll = () => {
        setFeatured(data)
    }
    console.log(featured)
    return (
        <div>
            <h2 className='text-center fw-bold fs-1 mb-3'>Featured Jobs</h2>
            <p className='text-center mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div>
                {

                }
                <button onClick={handleShowAll}>ok</button>
            </div>
        </div>
    );
};

export default Featured;