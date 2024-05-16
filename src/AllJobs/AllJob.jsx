import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllJobCard from "./AllJobCard";

const AllJob = () => {


    const loadedJobs = useLoaderData();
    const [jobs, setJobs] = useState(loadedJobs)


    return (
        <>
            <h1 className="text-5xl">All Jobs</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-6">
        {jobs.map((job) => (
          <AllJobCard
          key={job._id}
          job={job}
          setJobs={setJobs}
          ></AllJobCard>
        ))}
      </div>
        </>
    );
};

export default AllJob;