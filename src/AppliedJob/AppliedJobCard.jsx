import Swal from "sweetalert2";

const AppliedJobCard = ({ jobs, job, setJobs }) => {

    const { _id } = job


    const handleCancelApply = (_id) => {
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
              `https://m-63-assignment-11-career-nest-server.vercel.app/appliedjobs/${_id}`,
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
                    text: "You Successfully Cencel The apply.",
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



    // eslint-disable-next-line
    const { job_banner, job_catagory, salary_range} = job || {}



    return (
        <div>
      <div className="card w-96 bg-[#407db4] text-white shadow-xl">
        <figure>
          <img src={job_banner} alt="Shoes" />
        </figure>
        <div className="flex my-6 justify-around">
        <div className="">
          <p>Job Type: {job_catagory}</p>
          <p>Salary Range: {salary_range} BDT</p>
        </div>
        <div>
            <button onClick={() => handleCancelApply(_id)} className="btn">Cencel Apply</button>
        </div>
        </div>
      </div>
    </div>
    );
};

export default AppliedJobCard;