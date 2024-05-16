import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJobCard from "./AppliedJobCard";
import { AuthContext } from "../Providers/AuthProviders";

const AppliedJob = () => {
    // eslint-disable-next-line
    const { user } = useContext(AuthContext)
    const loadedJobs = useLoaderData();
    const [jobs, setJobs] = useState(loadedJobs)
    const data = jobs.filter((item) => item.email === user?.email);
    console.log(data)

    if(jobs.length === 0){
        document.getElementById('header').innerHTML = 'Currently You do not have apply any jobs'
    }

    return (
        <>
            <h1 className="text-5xl font-bold" id="header">My Applied Jobs: </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-6">
            {data.map((job) => (
            <AppliedJobCard
            key={job._id}
            job={job}
            jobs={jobs}
            setJobs={setJobs}
            ></AppliedJobCard>
        ))}
      </div>
        </>
    );
};


export default AppliedJob;