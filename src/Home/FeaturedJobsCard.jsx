const FeaturedJobsCard = ({job}) => {
  return (
    <div>
      <div className="card w-96 bg-[#407db4] text-white shadow-xl">
        <figure>
          <img
            src={job.job_banner}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {job.job_title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobsCard;
