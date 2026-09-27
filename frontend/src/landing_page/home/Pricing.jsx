import React from 'react'

const Pricing = () => {
  return (
    <div className="container px-4 px-lg-5">
      <div className="row p-4 p-lg-5">

        <div className="col-12 col-lg-5">
          <h1 className="fs-3 mb-4 text-heading">Unbeatable pricing</h1>

          <p className='text-heading'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

          <a href="#" style={{ textDecoration: "none" }}>See pricing <i className="fa-solid fa-arrow-right-long"></i></a>
        </div>

        <div className="col-12 col-lg-7 d-flex flex-column flex-md-row mt-5 mt-lg-0">

          <div className="col-12 col-md-4 d-flex justify-content-start align-items-center mb-4 mb-md-0">
            <img src="media/pricing0.svg" className="pricing-img me-3" alt="" />
            <p className="small-para">Free account <br /> opening</p>
          </div>

          <div className="col-12 col-md-5 d-flex justify-content-start align-items-center mb-4 mb-md-0">
            <img src="media/pricing0.svg" className="pricing-img me-3" alt="" />
            <p className="small-para">Free equity delivery <br /> and direct mutual funds</p>
          </div>

          <div className="col-12 col-md-3 d-flex justify-content-start align-items-center">
            <img src="media/pricing-20.svg" className="pricing-img me-3" alt="" />
            <p className="small-para">Intraday and <br />F&O</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Pricing