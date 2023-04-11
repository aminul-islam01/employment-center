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

    useEffect(()=> {
        setFilter(featured);
    }, [filter])

    const handleFilter = (id) => {
        const remote = filter.filter(job => job.job_location === id)
        setFeatured(remote)
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
        <div className='mt-5 pt-5'>
            <DropdownButton id="dropdown-item" title="Filter by"
            className='text-end mb-2 bg-none' variant="secondary ">
                <Dropdown.Item  as="button"onClick={() => handleFilter('Remote')}>Remote</Dropdown.Item>
                <Dropdown.Item  as="button"onClick={() => handleFilter('Onsite')}>Onsite</Dropdown.Item>
            </DropdownButton>
            {jobs.map(job => <AppliedjobsItem
                job={job}
                key={job.id}>
            </AppliedjobsItem>)}
        </div>
    );
};

export default AppliedJob;