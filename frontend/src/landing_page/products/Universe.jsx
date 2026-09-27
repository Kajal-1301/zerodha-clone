
const Universe = () => {
  return (
   <div className="container px-4 px-lg-5 py-5">

  {/* Heading */}

  <div className="text-center mb-5 text-heading">
    <h2 className="mb-4 fs-2"> The Zerodha Universe </h2>
    <p style={{ fontSize: "1rem" }}> Extend your trading and investment experience even further with our partner platforms </p>
  </div>

  {/* Cards */}

  <div className="row">

    <div className="col-12 col-md-6 col-lg-4 p-4 p-lg-5">
      <img src="media/zerodhaFundhouse.png" alt="Zerodha Fund House" className="universe-img fundhouse-img" />

      <p className="mt-4 universe-text">
        Our asset management venture that is creating simple
        and transparent index funds to help you save for your goals.
      </p>
    </div>

    <div className="col-12 col-md-6 col-lg-4 p-4 p-lg-5">
      <img src="media/sensibullLogo.svg" alt="Sensibull" className="universe-img sensibull-img" />

      <p className="mt-4 universe-text">
        Options trading platform that lets you create strategies,
        analyze positions, and examine data points like open
        interest, FII/DII, and more.
      </p>
    </div>

    <div className="col-12 col-md-6 col-lg-4 p-4 p-lg-5">
      <img src="media/tijori.svg" alt="Tijori" className="universe-img tijori-img" />

      <p className="mt-4 universe-text">
        Investment research platform that offers detailed
        insights on stocks, sectors, supply chains, and more.
      </p>
    </div>

    <div className="col-12 col-md-6 col-lg-4 p-4 p-lg-5">
      <img src="media/streakLogo.png" alt="Streak" className="universe-img streak-img" />

      <p className="mt-4 universe-text">
        Systematic trading platform that allows you to create
        and backtest strategies without coding.
      </p>
    </div>

    <div className="col-12 col-md-6 col-lg-4 p-4 p-lg-5">
      <img src="media/smallcaseLogo.png" alt="Smallcase" className="universe-img smallcase-img" />

      <p className="mt-4 universe-text">
        Thematic investing platform that helps you invest
        in diversified baskets of stocks or ETFs.
      </p>
    </div>

    <div className="col-12 col-md-6 col-lg-4 p-4 p-lg-5">
      <img src="media/dittoLogo.png" alt="Ditto" className="universe-img ditto-img" />

      <p className="mt-4 universe-text">
        Personalized advice on life and health insurance.
        No spam and no mis-selling.
      </p>
    </div>

    <div className="col-12 text-center">
      <button className="btn btn-primary fs-5 mt-3 signup-btn"> Sign up for free </button>
    </div>

  </div>
</div>
  )
}

export default Universe