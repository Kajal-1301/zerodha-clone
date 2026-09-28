import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container py-5">
      <div className="row text-center">

        <div className="col-12">
          <img src="media/landing-hero.svg" alt="Hero Image" className="hero-image mb-5" />
        </div>

        <div className="col-12">
          <h1 className="text-heading hero-title mt-3"> Invest in everything </h1>

          <p className="text-heading hero-text"> Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. </p>

          <Link
            to="/signup"
            className="btn btn-primary fs-5 mt-3 px-4 py-1.5"
          >
            Sign up for free
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Hero 