import React from 'react'

const Education = () => {
  return (
    <div className='container px-4 px-lg-5 py-5'>
      <div className="row p-4 p-lg-5 align-items-center">

        <div className="col-12 col-lg-6 text-center mb-5 mb-lg-0">
          <img src="media/education.svg" className="education-img" alt="" />
        </div>

        <div className="col-12 col-lg-6">
          <h1 className='mb-4 fs-3 text-heading'>
            Free and open market education
          </h1>

          <p className='lh-lg text-heading'>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </a>

          <p className='lh-lg mt-5 text-heading'>
            TradingQ&A, the most active trading and investment community in India
            for all your market related queries.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Education
