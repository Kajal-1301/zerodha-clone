import React from 'react'

const Investments = () => {
    return (
        <div className="container investment-section mt-5 px-3 px-md-5">

            <h2 className="text-heading fs-3 text-center mb-5"> Investment options with Zerodha demat account </h2>

            <div className="row py-4">

                <div className="col-12 col-md-6 d-flex align-items-center mb-5 px-3 px-md-5">
                    <img
                        src="media/stocks-acop.svg"
                        alt="Stocks"
                        className="img-fluid"
                        style={{ width: "25%", maxWidth: "90px" }}
                    />

                    <div className="ms-4 lh-lg">
                        <h3 className="text-heading fs-5"> Stocks </h3>
                        <p className="text-body fs-6"> Invest in all exchange-listed <br className="d-none d-sm-block" /> securities </p>
                    </div>
                </div>

                <div className="col-12 col-md-6 d-flex align-items-center mb-5 px-3 px-md-5">
                    <img
                        src="media/mutual-funds.svg"
                        alt="Mutual Funds"
                        className="img-fluid"
                        style={{ width: "25%", maxWidth: "90px" }}
                    />

                    <div className="ms-4 lh-lg">
                        <h3 className="text-heading fs-5"> Mutual funds </h3>
                        <p className="text-body fs-6"> Invest in commission-free direct <br className="d-none d-sm-block" /> mutual funds </p>
                    </div>
                </div>

                <div className="col-12 col-md-6 d-flex align-items-center mb-5 px-3 px-md-5">
                    <img
                        src="media/ipo-acop.svg"
                        alt="IPO"
                        className="img-fluid"
                        style={{ width: "25%", maxWidth: "90px" }}
                    />

                    <div className="ms-4 lh-lg">
                        <h3 className="text-heading fs-5"> IPO </h3>
                        <p className="text-body fs-6"> Apply to the latest IPOs instantly <br className="d-none d-sm-block" /> via UPI </p>
                    </div>
                </div>

                <div className="col-12 col-md-6 d-flex align-items-center mb-5 px-3 px-md-5">
                    <img
                        src="media/fo-acop.svg"
                        alt="Futures and options"
                        className="img-fluid"
                        style={{ width: "25%", maxWidth: "90px" }}
                    />

                    <div className="ms-4 lh-lg">
                        <h3 className="text-heading fs-5"> Futures & options </h3>
                        <p className="text-body fs-6"> Hedge and mitigate market risk <br className="d-none d-sm-block" /> through simplified F&O trading </p>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <button className="px-4 py-2 btn btn-primary fs-5 mt-3" > Explore Investments </button>
            </div>

        </div>
    )
}

export default Investments