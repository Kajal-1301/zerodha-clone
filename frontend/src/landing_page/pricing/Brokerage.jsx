import React from 'react'

const Brokerage = () => {
  return (
   <div className="container">
  <div className="row p-3 p-md-5 text-center border-top">

    <div className="col-12 col-md-8 mb-4 mb-md-0">
      <a href="" style={{ textDecoration: "none" }}>
        <h4>Brokerage Calculator</h4>
      </a>

      <ul style={{ textAlign: "left", lineHeight: "2", marginTop: "15px", color: "#666666" }}>
        <li>  Call &amp; Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order. </li>

        <li> Digital contract notes will be sent via e-mail. </li>

        <li> Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply. </li>

        <li> For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower). </li>

        <li> For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower). </li>

        <li> If the account is in debit balance, any order placed will be charged ₹40 per executed instead of ₹20 per executed order. </li>
      </ul>
    </div>

    <div className="col-12 col-md-4">
      <a href="" style={{ textDecoration: "none" }}>
        <h4>List of charges</h4>
      </a>
    </div>

  </div>
</div>
  )
}

export default Brokerage