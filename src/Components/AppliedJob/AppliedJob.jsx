import React, { useContext, useEffect, useState } from 'react';
import { JobContext } from '../../App';
import { getJobs } from '../../utilities/common';
import AppliedjobsItem from '../AppliedJobsItem/AppliedjobsItem';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const AppliedJob = () => {
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
    }, [featured])

    return (
        <>
            <h3 className='text-center mb-5 gray py-5'>Applied Job</h3>
            <DropdownButton id="dropdown-item" title="Filter by"
                className='text-end mb-2 bg-none' variant="secondary ">
                <Dropdown.Item as="button" onClick={() => handleFilter('Remote')}>Remote</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => handleFilter('Onsite')}>Onsite</Dropdown.Item>
            </DropdownButton>
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