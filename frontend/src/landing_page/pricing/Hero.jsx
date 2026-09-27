import React from 'react'

const Hero = () => {
  return (
    <div className="container pt-5 px-3 px-md-5">
  <div className='text-center py-4'>
    <h1 className='fs-2 text-heading' >Charges</h1>
    <p className='fs-4 pt-2' style={{color : "#9b9b9b"}}>List of all charges and taxes</p>
  </div>

  <div className="row text-center g-5">

    <div className="col-12 col-md-4">
      <img src="media/pricing0.svg" className='mb-3 img-fluid' style={{width : "130px"}} alt="" />
      <h2 className='fs-3 text-heading'>Free equity delivery</h2>
      <p className='lh-lg text-body'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
    </div>

    <div className="col-12 col-md-4">
      <img src="media/pricing-20.svg" className='mb-3 img-fluid' style={{width : "130px"}} alt="" />
      <h2 className='fs-3 text-heading'>Intraday and F&O trades</h2>
      <p className='lh-lg text-body'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
    </div>

    <div className="col-12 col-md-4">
      <img src="media/pricing0.svg" className='mb-3 img-fluid' style={{width : "130px"}} alt="" />
      <h2 className='fs-3 text-heading'>Free direct MF</h2>
      <p className='lh-lg text-body'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
    </div>

  </div>
</div>
  )
}

export default Hero