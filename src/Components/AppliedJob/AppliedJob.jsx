import React, { useContext, useEffect, useState } from 'react';
import { JobContext } from '../../App';
import { getJobs } from '../../utilities/common';
import AppliedjobsItem from '../AppliedJobsItem/AppliedjobsItem';

const AppliedJob = () => {
    const featured = useContext(JobContext);
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const storedJobs = getJobs()
        // console.log(storedJobs)

        const appliedJobs = [];
        for (const Id of storedJobs) {
            const applied = featured.filter(job => job.id === Id)
            appliedJobs.push(...applied)
        }
        setJobs(appliedJobs)
    }, [])
    // console.log(jobs)

    return (
        <div className='mt-5 pt-5'>
            {jobs.map(job => <AppliedjobsItem
            job={job}
            key={job.id}>
            </AppliedjobsItem>)} 
        </div>
    );
};

export default AppliedJob;