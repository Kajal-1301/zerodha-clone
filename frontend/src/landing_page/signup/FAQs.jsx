import React, { useState } from "react";

const FAQs = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a Zerodha account",
      answer: "A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally."
    },
    {
      question: "What documents are required to open a demat account?",
      answer: (
        <>
          <p>The following documents are required to open a Zerodha account online:</p>
          <ul>
            <li>PAN number</li>
            <li>Aadhaar Card (Linked with a phone number for OTP verification)</li>
            <li>Cancelled cheque or bank account statement (To link your bank account)</li>
            <li>Income proof (Required only if you wish to trade in Futures & options)</li>
          </ul>
        </>
      )
    },
    {
      question: "Is Zerodha account opening free?",
      answer: "Yes, It is completely free."
    },
    {
      question: "Are there any AMC (Account Maintenance Charges) for a demat account?",
      answer: (
        <>
          <p>There is no AMC for the first year on all new resident individual accounts opened from June 1, 2026. From the second year, charges depend on the account type.</p>
          <p>For Basic Services Demat Account (BSDA): Zero charges on holdings up to ₹4 lakh; ₹100/year between ₹4 lakh and ₹10 lakh.</p>
          <p>For non-Basic Services Demat Account: ₹300 per year + GST.</p>
          <p>To learn more about BSDA, <a href="#">Click here.</a></p>
        </>
      )
    },
    {
      question: "Can I open a demat account without a bank account?",
      answer: (
        <>
          <p>To open a demat account, you must have a bank account in your name.</p>
          <p>If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha.</p>
        </>
      )
    },
    {
      question: "What is a Basic Services Demat Account (BSDA)?",
      answer: "BSDA is a demat account designed for retail investors with smaller holdings. It automatically applies if you have only one demat account per PAN and holdings of up to ₹10 lakhs in it. You will not be charged any Account Maintenance Charge (AMC) for holdings up to ₹4 lakhs value, and only ₹25/quarter if holdings are between ₹4 lakhs and ₹10 lakhs."
    },
    {
      question: "Can I open a demat and trading account using the mobile app?",
      answer: "Yes, You can open a demat and trading account completely online using the Zerodha Kite mobile app, available on Android and iOS."
    }
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container my-5 py-4 px-3 px-md-4">
      <h2 className="text-heading mb-5"> FAQs </h2>

      <div>
        {faqs.map((faq, index) => (

          <div className="faq-item" key={index}>

            <div
              className="d-flex justify-content-between align-items-center py-4"
              onClick={() => handleClick(index)}
              style={{ cursor: "pointer" }}
            >

              <h5 className="mb-0 text-heading"> {faq.question} </h5>

              <span className="faq-icon">
                {openIndex === index ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
              </span>

            </div>

            {openIndex === index && (<div className="text-body pb-4"> {faq.answer} </div>)}

          </div>
        ))}
        
      </div>
    </div>
  );
}

export default FAQs