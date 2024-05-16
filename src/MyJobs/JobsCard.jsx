import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const JobsCard = ({ job, jobs, setJobs }) => {
  const { _id } = job;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://m-63-assignment-11-career-nest-server.vercel.app/addJob/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Job has been deleted.",
                icon: "success",
              });
            }
            // delete data from UI
            const updatedJobs = jobs.filter((job) => job._id !== _id);
            setJobs(updatedJobs)
          });
      }
    });
  };

  return (
    <div>
      <div className="card w-96 bg-[#407db4] text-white shadow-xl">
        <figure>
          <img src={job.job_banner} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job.job_title}</h2>
        </div>
        <div className="flex justify-around my-4">
          <Link to={`/updateJob/${_id}`}><button className="btn hover:text-white hover:bg-[#407db4]">
            Update
          </button></Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn hover:text-white hover:bg-[#407db4]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
