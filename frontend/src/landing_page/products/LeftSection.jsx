
const LeftSection = ({ imageURL, productName, productDescription, link1, link2, googlePlay, appStore }) => {
  return (
    <div className="container py-5 px-3 px-md-5">
      <div className="row align-items-center g-4">

        {/* Image Section */}

        <div className="col-12 col-md-8 px-3 px-md-5 text-center">
          <img src={imageURL} alt="" className="img-fluid" />
        </div>

        {/* Text Section */}

        <div className="col-12 col-md-4 text-heading px-3 px-md-4">
          <h1 className='fs-3'>{productName}</h1>

          <p className='lh-lg' style={{ fontSize: "1rem" }}> {productDescription} </p>

          <div className='mb-4 d-flex flex-wrap gap-4'>
            <a style={{ textDecoration: "none" }} href={link1}>
              Try Demo <i className="fa-solid fa-arrow-right-long" style={{ color: "#387ed1" }}></i>
            </a>

            <a style={{ textDecoration: "none" }} href={link2}>
              Learn More <i className="fa-solid fa-arrow-right-long" style={{ color: "#387ed1" }}></i>
            </a>
          </div>

          <div className="d-flex flex-wrap gap-3">
            <a href={googlePlay}>
              <img src="media/googlePlayBadge.svg" alt="google play logo" className="img-fluid" />
            </a>

            <a href={appStore}>
              <img src="media/appstoreBadge.svg" alt="app store logo" className="img-fluid" />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LeftSection