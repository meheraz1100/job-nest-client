import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { toast } from "react-toastify";

const AddJob = () => {

    const { user } = useContext(AuthContext);
    console.log(user)

    const handleAddJob = (e) => {
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


        const newJob = {user_email, job_banner, job_catagory, job_title, job_description, posting_date, application_deadline, salary_range};
        console.log(newJob);

        // send data to the server

        fetch('https://m-63-assignment-11-career-nest-server.vercel.app/addJob', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            toast.success('Job added Success!!')
          }
          form.reset()
        })
    }



  return (
    <div className="bg-[#407db4] p-24 rounded-lg">
      <h1 className="text-6xl text-center font-extrabold">Add a Job</h1>
      <form className="card-body" onSubmit={handleAddJob}>
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
              className="input input-bordered w-full"
              name="salary_range"
              required
            />
          </div>
        </div>
        <button className="btn">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;
