
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

  const {signIn, googleLogin} = useContext(AuthContext);
  const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);



        signIn(email, password)
        .then(result => {
          console.log(result.user);
          e.target.reset();
          toast.success('Login Success!!!!!!')
          navigate('/')
        })
        .catch(error => console.log(error))
    }

    const handleGoogleLogin = () => {
      googleLogin()
      .then(result => {
        console.log(result?.user)
        toast.success('Login Success!!!!!!')
        navigate('/')
      })
    }






    return (
        <div>
      <div className="hero min-h-screen bg-[#407db4] rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
            <img className="rounded-full" src='https://i.ibb.co/3my4B6T/1000-F-132438747-v-Qyl1wid-U6cv-Ps-AWl-B2-Ypm-FCck9-N4h-Wq.jpg' alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
            <h1 className="text-4xl text-center font-bold">Login</h1>
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
                  <span className="label-text">Password</span>
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
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className="text-center pb-4">New to Job Nest? <Link to="/register" className="font-bold text-orange-500"> Sign Up</Link></p>
            <div className="flex justify-center">
              <button
                className="btn btn-ghost text-4xl tooltip"
                data-tip="Login With Google"
                onClick={handleGoogleLogin}
              >
                <FcGoogle></FcGoogle>
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;