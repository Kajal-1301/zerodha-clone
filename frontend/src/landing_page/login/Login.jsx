import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, { email, password },
        {
          withCredentials: true
        }
      );

      console.log(response.data);
      toast.success("Login successful!");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        window.location.href = "https://zerodha-clone-t3rf.vercel.app";
      }, 2000);

    } catch (error) {

      console.log("LOGIN ERROR:", error);
      console.log("SERVER ERROR:", error.response?.data);

      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container py-5">

      <div className="row justify-content-center py-5">

        <div className="col-12 col-md-6 col-lg-5">

          <div className="text-center mb-4">

            <h1 className="fs-2 text-heading"> Login  </h1>

            <p className="text-body"> Login to your Zerodha account </p>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">

              <label className="form-label"> Email </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            <div className="mb-3">

              <label className="form-label"> Password </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3" >  Login  </button>

          </form>


          <p className="text-center mt-4 text-body">  Don't have an account?{" "}  <Link to="/signup">  Create an account  </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;