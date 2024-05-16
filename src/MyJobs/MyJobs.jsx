import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobsCard from "./JobsCard";
import { AuthContext } from "../Providers/AuthProviders";

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const loadedJob = useLoaderData();
  const [jobs, setJobs] = useState(loadedJob);
  const data = jobs.filter((item) => item.user_email === user?.email);
  console.log(data)
  console.log(user.email)

  return (
    <>
    
    <h1 className="text-5xl font-bold text-center pb-10 underline">My Job List</h1>
      <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
      {data.map((job) => (
        <JobsCard key={job._id} job={job} setJobs={setJobs} jobs={jobs}></JobsCard>
      ))}
      </div>
    </>
  );
};

export default MyJobs;
