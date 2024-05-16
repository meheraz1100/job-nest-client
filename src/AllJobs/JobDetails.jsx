import { useContext, useState } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";

const JobDetails = () => {
  const { user } = useContext(AuthContext)
  const loadedJob = useLoaderData();
  // eslint-disable-next-line
  const [jobs, setJobs] = useState(loadedJob);

  const handleApply = () => {
    const job_banner = loadedJob.job_banner;
    const salary_range = loadedJob.salary_range;
    const job_catagory = loadedJob.job_catagory;
    const email = user.email;

    const applied = {
      
      job_banner, 
      salary_range,
      job_catagory,
      email
    }


    console.log(applied)

    fetch('https://m-63-assignment-11-career-nest-server.vercel.app/appliedjobs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(applied)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Apply successfully",
            showConfirmButton: false,
            timer: 1500
          });
    }
    })


  }
  







  return (
    <div>
      <Link to='/allJob'><IoArrowBackCircleSharp className="text-5xl tooltip" data-tip="Go Back" /></Link>
      <div className="card lg:card-side text-white bg-[#407db4] shadow-xl">
        <figure>
          <img
            className="w-96 rounded-lg"
            src={loadedJob.job_banner}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{loadedJob.job_title}</h2>
          <p>{loadedJob.job_catagory}</p>
          <p>{loadedJob.job_description}</p>
          <p>Posting date: {loadedJob.posting_date}</p>
          <p>Salary Range: {loadedJob.salary_range}</p>
          <p>Applicant Number : {jobs.length}</p>

          {/* modal */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={handleApply}
          >
            Apply
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
