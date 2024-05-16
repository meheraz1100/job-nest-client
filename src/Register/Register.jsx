import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { createUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate('/login')
        toast('Please Sign In First')
      })
      .catch((error) => console.log(error));
  };

  // const handleGoogleLogin = () => {
  //   googleLogin()
  //   .then(result => {
  //     console.log(result.user)
  //     navigate('/')
  //     toast.success('User login with Google successfully')
  //   });
  // };

  const handleGoogleLogin = async () => {
    try{
      const result = await googleLogin()
      const user = result.user;
      console.log(user);
      navigate('/')
    }
    catch(error){
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 mr-12">
              <img
                className="rounded-lg"
                src="https://i.ibb.co/mBcLcqq/1000-F-119953739-n-FB9-KAQlz-M0lvq-Nhe-Dif-WHt-SN3bjh8a-K.jpg"
                alt=""
              />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleRegister}>
                <h1 className="text-4xl text-center font-bold">Sign Up</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <div className="flex justify-center">
                <button
                  className="btn btn-ghost text-4xl tooltip"
                  data-tip="Login With Google"
                  onClick={handleGoogleLogin}
                >
                  <FcGoogle></FcGoogle>
                  
                </button>
              </div>
              <p className="text-center pb-4">
                Already have an account?{" "}
                <Link to="/login" className="font-bold text-orange-500">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
