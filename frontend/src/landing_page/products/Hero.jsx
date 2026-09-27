import React from 'react'

const Hero = () => {
  return (
    <div className="container text-center px-4 px-lg-5 py-4 py-lg-5 text-heading">
      <h1 className='mt-3 mt-lg-4 fs-2'>Zerodha Products</h1>
      <p className='fs-5 mt-3'>Sleek, modern, and intuitive trading platforms</p>
      <p className='mt-3'>Check out our <a href="#" style={{ textDecoration: "none" }}>investment offerings</a> <i className="fa-solid fa-arrow-right-long" style={{ color: "#387ed1" }}></i></p>
    </div>
  )
}

export default Hero