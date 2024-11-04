import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Login() {
  const {signInUser, loginWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    signInUser(email, password)
    .then(result=>{
      e.target.reset();
      navigate('/profile')
      console.log(result.user);
      
    })
    .catch(error=>{
      console.log(error);
      
    })
  };
  const handleGoogleSignIn = ()=>{
    loginWithGoogle()
    .then(result=>{
      console.log(result)
    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
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
                <span
                  className="label-text"
                  required
                  placeholder="enter you password"
                >
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              New here? please
              <Link to="/register">
                <button className="btn-link btn">Register</button>
              </Link>
            </p>
          </form>
          <p><button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button></p>
        </div>
      </div>
    </div>
  );
}
