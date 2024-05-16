const JobCard = ({ job }) => {
  return (
    <div>
      <div>
        <div className="card card-side text-white bg-[#407db4] shadow-xl">
          <figure>
            <img
              className=" rounded-lg"
              src={job.job_banner}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Details</h2>
            <p>{job.job_catagory}</p>
            <p>Salary Range: ${job.salary_range}</p>

            {/* modal */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
