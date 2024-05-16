import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import { useState } from "react";
import FeaturedJobsCard from "./FeaturedJobsCard";
import TabCatagories from "./TabCatagories";

const Home = () => {
  const loadedJobs = useLoaderData();
  const [jobs, setjobs] = useState(loadedJobs);
  console.log(jobs);

  const [dataLength, setDataLength] = useState(6);

  return (
    <>
      <Banner></Banner>
      <h1 className="text-6xl text-center font-bold my-10">Featured Jobs: </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-6">
        {jobs.slice(0, dataLength).map((job) => (
          <FeaturedJobsCard key={job._id} job={job} setjobs={setjobs}></FeaturedJobsCard>
        ))}
      </div>
      <div className={dataLength === jobs.length ? "hidden" : ""}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn text-2xl my-6 justify-center w-full"
        >
          Show All Jobs
        </button>
      </div>
      <TabCatagories jobs={jobs}/>
    </>
  );
};

export default Home;
