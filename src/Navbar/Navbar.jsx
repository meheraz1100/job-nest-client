import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut().then(() => {
      console.log("user logged out success!!!");
      toast.success("User Logged Out Success!!!");
      navigate("/");
    });
  };

  const navItems = (
    <>
      <li className="hover:bg-[#407db4] hover:rounded-lg hover:text-white">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:bg-[#407db4] hover:rounded-lg hover:text-white">
        <Link to="/blogs">Blogs</Link>
      </li>
      <li className="hover:bg-[#407db4] hover:rounded-lg hover:text-white">
        <Link to="/allJob">All Jobs</Link>
      </li>
      {user?.email ? (
        <>
          <li className="hover:bg-[#407db4] hover:rounded-lg hover:text-white">
            <Link to="/appliedJobs">Applied Jobs</Link>
          </li>
          <li className="hover:bg-[#407db4] hover:rounded-lg hover:text-white">
            <Link to="/addJob">Add a Job</Link>
          </li>
          <li className="hover:bg-[#407db4] hover:rounded-lg hover:text-white">
            <Link to="/myJobs">My Jobs</Link>
          </li>
          <li className="hover:bg-[#407db4] hover:rounded-lg hover:text-white">
            <Link to="/" onClick={handleLogOut}>
              Logout
            </Link>
          </li>
        </>
      ) : (
        <li className="hover:bg-[#407db4] hover:rounded-lg hover:text-white">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100  mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base"
            >
              {navItems}
            </ul>
          </div>
          <button className="btn btn-ghost text-3xl">Job Nest</button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <>
              <p className="text-xs p-4">{user?.email}</p>
              <img
                className="rounded-full w-14"
                title={user?.displayName}
                src={user?.photoURL}
                alt=""
              />
            </>
          ) : (
            <button className="btn btn-outline text-white bg-[#407db4]">
              <Link to="/login">Apply</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
