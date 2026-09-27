
const Stats = () => {
  return (
    
      <div className="container py-5">
        <div className="row align-items-center">

          {/* Left section */}
          
          <div className="col-12 col-lg-6 px-4 px-lg-5">

            <h1 className="text-heading fs-3 mb-5" >  Trust with confidence </h1>

            <h2 className="text-heading fs-4">  Customer-first always </h2>

            <p style={{ color: "#666666", marginBottom: "32px" }}> That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India. </p>

            <h2 className="text-heading fs-4"> No spam or gimmicks </h2>

            <p style={{ color: "#666666", marginBottom: "32px" }} > No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

            <h2 className="text-heading fs-4"> The Zerodha universe </h2>

            <p style={{ color: "#666666", marginBottom: "32px" }} >  Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs. </p>

            <h2 className="text-heading fs-4"> Do better with money</h2>

            <p style={{ color: "#666666", marginBottom: "32px" }}> With initiatives like Nudge and Kill Switch, we don't just facilitate
              transactions, but actively help you do better with your money.</p>

          </div>

          {/* Right section */}

          <div className="col-12 col-lg-6 px-4">

            <img src="media/ecosystem.png" alt="Zerodha ecosystem" className="img-fluid" />

            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mt-4">

              <a href="#" style={{ textDecoration: "none" }}>  Explore our products <i className="fa-solid fa-arrow-right-long ms-2"></i> </a>

              <a href="#" style={{ textDecoration: "none" }} > Try kite demo <i className="fa-solid fa-arrow-right-long ms-2"></i> </a>

            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Stats