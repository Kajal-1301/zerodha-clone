import { Link , Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios";
import toast from "react-hot-toast";

const Hero = () => {

  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/signup", { name, email, password });

      setName("");
      setEmail("");
      setPassword("");

      navigate("/login")

      toast.success("Account created successfully!");

    } catch (error) {
      console.log(error);
      console.log(error.response?.data);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container px-3 px-md-5">

      <div className="text-center">
        <h1 className='mt-4 fs-2 text-heading'> Open a free demat and trading account online </h1>
        <p className='fs-5 mt-4 text-body'> Start investing brokerage free and join a community of 1.6+ crore investors and traders </p>
      </div>

      <div className="row py-5 px-2 px-md-5 align-items-center gx-5">

        <div className="col-12 col-md-6 text-center mb-5 mb-md-0">
          <img
            src="media/account_open.svg"
            alt=""
            className="img-fluid"
            style={{ maxWidth: "500px", width: "100%" }}
          />
        </div>

        <div className="col-12 col-md-6">
          <h1 className='fs-3 text-heading'> Signup now </h1>

          <p className="text-body"> Or track your existing application </p>

          <form onSubmit={handleSubmit} className="text-start mt-4 w-100" >

            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3" > Create Account </button>

          </form>


          <p className="mt-4 text-body">
            Already have an account? {" "}
            <Link to="/login">Login</Link>
          </p>

        </div>

      </div>

    </div>
  )
}

export default Hero