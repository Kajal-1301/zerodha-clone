import { Link } from "react-router-dom";

const OpenAccount = () => {
  return (
    <div className='container px-4 px-lg-5 py-5'>
      <div className='row text-center p-4 p-lg-5'>

        <h1 className='my-3 mt-lg-5 fs-2 text-heading'> Open a Zerodha account </h1>

        <p className='fs-5 fs-lg-4 text-heading'> Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades. </p>

        <Link
          to="/signup"
          className="btn btn-primary fs-5 mt-3 px-4 py-1.5"
        >
          Sign up for free
        </Link>

      </div>
    </div>
  )
}

export default OpenAccount