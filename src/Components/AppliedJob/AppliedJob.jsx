import React, { useContext, useEffect, useState } from 'react';
import { JobContext } from '../../App';
import { getJobs } from '../../utilities/common';
import AppliedjobsItem from '../AppliedJobsItem/AppliedjobsItem';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const AppliedJob = () => {
    const [storeArray, setStoredArray] = useState([])
    const [filter, setFilter] = useState([]);
    const [featured, setFeatured] = useContext(JobContext);
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        setFilter(featured);
    }, [filter])

    const handleFilter = (id) => {
        const filterJob = filter.filter(job => job.job_location === id)
        setFeatured(filterJob)
    }

    useEffect(() => {
        const storedJobs = getJobs()
        // console.log(storedJobs)

        const appliedJobs = [];
        for (const Id of storedJobs) {
            const applied = featured.filter(job => job.id === Id)
            appliedJobs.push(...applied)
        }
        setJobs(appliedJobs)
        setStoredArray(storedJobs)
    }, [featured])
    // console.log(jobs.length)
    return (
        <>
            <h3 className='text-center mb-5 gray py-5'>Applied Job</h3>
            {storeArray.length===0? <h2 className='text-center text-warning mb-5'>You are not applied any job</h2>
            : 
            <DropdownButton id="dropdown-item" title="Filter by"
                className='text-end mb-2 bg-none' variant="secondary ">
                <Dropdown.Item as="button" onClick={() => handleFilter('Remote')}>Remote</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => handleFilter('Onsite')}>Onsite</Dropdown.Item>
            </DropdownButton>
            }
            <div className='px-2'>
                {jobs.map(job => <AppliedjobsItem
                    job={job}
                    key={job.id}>
                </AppliedjobsItem>)}
            </div>
        </>
    );
};

export default AppliedJob;