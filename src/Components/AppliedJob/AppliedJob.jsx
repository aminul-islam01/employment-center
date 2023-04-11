import React, { useContext, useEffect, useState } from 'react';
import { JobContext } from '../../App';
import { getJobs } from '../../utilities/common';
import AppliedjobsItem from '../AppliedJobsItem/AppliedjobsItem';

const AppliedJob = () => {
    const [featured, setFeatured] = useContext(JobContext);
    const [jobs, setJobs] = useState([])

    const handleFilter = () => {
        const remote = featured.filter(job => job.job_location === "Remote")
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
            <button onClick={handleFilter}>Remote</button>
            {jobs.map(job => <AppliedjobsItem
            job={job}
            key={job.id}>
            </AppliedjobsItem>)} 
        </div>
    );
};

export default AppliedJob;