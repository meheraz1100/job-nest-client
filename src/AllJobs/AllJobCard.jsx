import { Link } from "react-router-dom";

const AllJobCard = ({ job } ) => {

  console.log(job);
  //eslint-disable-next-line
  const { _id, user_email, job_banner, job_catagory, job_title, job_description, posting_date, application_deadline, salary_range} = job || {}





  return (
    <div>
      <div className="card w-96 bg-[#407db4] text-white shadow-xl">
        <figure>
          <img src={job.job_banner} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {job.job_title}
          </h2>
          <p></p>
          <div className="card-actions justify-end">
            <Link to={`/jobDetails/${_id}`}><button className="badge badge-outline">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobCard;
