import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { toast } from "react-toastify";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const UpdateJobCard = () => {
    const { user } = useContext(AuthContext)
    const loadedJobs = useLoaderData();
    //eslint-disable-next-line
    const [jobs, setJobs] = useState(loadedJobs);
    // eslint-disable-next-line
    const { _id, user_email, job_banner, job_catagory, job_title, job_description, posting_date, application_deadline, salary_range} = jobs || {}

    const handleUpdateJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const user_email = form.email.value;
        const job_banner = form.banner_url.value;
        const job_catagory = form.job_catagory.value;
        const job_title = form.job_title.value;
        const job_description = form.job_description.value;
        const posting_date = form.posting_date.value;
        const application_deadline = form.application_deadline.value;
        const salary_range = form.salary_range.value;


        const updatedJob = {user_email, job_banner, job_catagory, job_title, job_description, posting_date, application_deadline, salary_range};
        console.log(updatedJob);

        // send data to the server
        fetch(`https://m-63-assignment-11-career-nest-server.vercel.app/addJob/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('Job Updated Successfully!!!')
        })
    }

  return (
    <div>
      <div className="bg-[#407db4] p-24 rounded-lg">
      <Link to='/myJobs'><IoArrowBackCircleSharp className="text-5xl tooltip" data-tip="Go Back" /></Link>
        <h1 className="text-6xl text-center font-extrabold">Update Job : {jobs.job_title}</h1>
        <form className="card-body" onSubmit={handleUpdateJob}>
          {/* email and  banner row */}
          <div className=" md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                defaultValue={user?.email}
                disabled
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Job Banner</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                defaultValue={jobs.job_banner}
                className="input input-bordered w-full"
                name="banner_url"
                required
              />
            </div>
          </div>
          {/* job catagory and job title */}
          <div className=" md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Job Catagory</span>
              </label>
              <input
                type="text"
                name="job_catagory"
                placeholder="Job Catagory"
                defaultValue={jobs.job_catagory}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <input
                type="text"
                placeholder="Job Title"
                defaultValue={jobs.job_title}
                className="input input-bordered w-full"
                name="job_title"
                required
              />
            </div>
          </div>
          {/* job description and short job posting date */}
          <div className=" md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Job Description</span>
              </label>
              <input
                type="text"
                placeholder="Job Description"
                defaultValue={jobs.job_description}
                name="job_description"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Job Posting Date</span>
              </label>
              <input
                type="date"
                placeholder="Posting Date"
                defaultValue={jobs.posting_date}
                className="input input-bordered w-full"
                name="posting_date"
                required
              />
            </div>
          </div>
          {/* application deadline and  salary range */}
          <div className=" md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Application Deadline</span>
              </label>
              <input
                type="date"
                placeholder="Application Deadline"
                defaultValue={jobs.application_deadline}
                name="application_deadline"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Salary Range</span>
              </label>
              <input
                type="text"
                placeholder="Salary Range"
                defaultValue={jobs.salary_range}
                className="input input-bordered w-full"
                name="salary_range"
                required
              />
            </div>
          </div>
          <button className="btn">Update Job</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateJobCard;
