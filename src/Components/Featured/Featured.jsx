import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import Button from 'react-bootstrap/Button';
import { JobContext } from '../../App';

const Featured = () => {
    const [featured, setFeatured] = useState([]);
    const [data, setData] = useContext(JobContext)
    const dataAll = useLoaderData();
    useEffect(()=> {
        const dataLimit = dataAll.slice(0,4);
        setFeatured(dataLimit)
        setData(dataAll)
    }, [])
    const handleShowAll = () => {
        setFeatured(dataAll)
    }
    // console.log(featured.length)
    return (
        <div className='px-2'>
            <h2 className='text-center fw-bold fs-1 mb-3'>Featured Jobs</h2>
            <p className='text-center mb-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='row'>
                {
                    featured.map(job => <FeaturedCard
                    job={job}
                    key={job.id}>
                    </FeaturedCard>)
                }
            </div>
            <div className='text-center mb-4'>
                {featured.length<5? 
                <Button onClick={handleShowAll} variant="primary">See All Jobs</Button>
                :""
                }
            
            </div>
        </div>
    );
};

export default Featured;