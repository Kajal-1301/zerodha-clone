
const RightSection = ({ productTitle, productDescription, imageURL, link }) => {
  return (
    <div className="container py-5 px-3 px-md-5">
      <div className="row align-items-center g-4">

        {/* Text Section */}

        <div className="col-12 col-md-5 px-3 px-md-4 text-heading order-2 order-md-1">
          <h1 className="fs-3">{productTitle}</h1>

          <p className="lh-lg">
            {productDescription}
          </p>

          <a href={link} style={{ textDecoration: "none" }}>
            Learn more →
          </a>
        </div>

        {/* Image Section */}

        <div className="col-12 col-md-7 text-center px-3 px-md-4 order-1 order-md-2">
          <img src={imageURL} alt="" className="img-fluid w-100" style={{ maxWidth: "600px" }} />
        </div>

      </div>
    </div>
  )
}

export default RightSection