
const Team = () => {
  return (
<div className="container px-4 px-lg-5">
  <div className="row text-center p-4 p-lg-5">
    <h1 className='fs-3 text-heading'>People</h1>
  </div>

  <div className="row px-2 px-lg-5 pb-5 align-items-center">

    <div className="col-12 col-lg-5 text-center mb-5 mb-lg-0">
      <img src="media/nithinKamath.jpg" alt="founder-img" style={{ height: "295px", maxWidth: "100%" }} className='rounded-circle' />
      <h2 className='fs-5 my-4 text-heading'>Nithin Kamath</h2>
      <h3 className='fs-6 text-body'>Founder, CEO</h3>
    </div>

    <div className="col-12 col-lg-7 px-2 px-lg-5">
      <p className='lh-lg'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

      <p className='lh-lg'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

      <p>Playing basketball is his zen.</p>

      <p>Connect on <a href="#" className='footer-links'>Homepage</a> / <a href="#" className='footer-links'>TradingQnA</a> / <a href="#" className='footer-links'>Twitter</a></p>
    </div>

  </div>
</div>
  )
}

export default Team