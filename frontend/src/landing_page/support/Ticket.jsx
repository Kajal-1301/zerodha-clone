const Ticket = () => {

    const ticketTopics = [
        {
            title: "Account Opening",
            icon: "fa-solid fa-circle-plus",
            links: [
                "Online Account Opening",
                "Offline Account Opening",
                "Company, Partnership and HUF Account Opening",
                "NRI Account Opening",
                "Charges at Zerodha",
                "Zerodha IDFC FIRST Bank 3-in-1 Account",
                "Getting Started"
            ]
        },
        {
            title: "Your Zerodha Account",
            icon: "fa-solid fa-user",
            links: [
                "Login Credentials",
                "Account Modification and Segment Addition",
                "DP ID and bank details",
                "Your Profile",
                "Transfer and conversion of shares"
            ]
        },
        {
            title: "Trading",
            icon: "fa-solid fa-chart-column",
            links: [
                "Margin/leverage, Product and Order types",
                "Kite Web and Mobile",
                "Trading FAQs",
                "Corporate Actions",
                "Sentinel",
                "Kite API",
                "Pi and other platform",
                "Stockreports+",
                "GTT"
            ]
        }
    ]

    return (
        <div className="container px-3 px-md-5">
            <div className="row p-3 p-md-5 text-center">
                <h1 className="fs-2 mt-2 text-heading"> To create a ticket, select a relevant topic </h1>
            </div>

            <div className="row py-4 px-2 px-md-5 gx-5">
                {ticketTopics.map((topic, index) => (
                    <div className="col-12 col-md-4 mb-5" key={index}>

                        <h2 className="fs-4 mb-4 text-heading">
                            <i className={topic.icon}></i> {topic.title}
                        </h2>

                        <div>
                            {topic.links.map((link, index) => (
                                <a href="#" key={index} style={{ textDecoration: "none", lineHeight: "2.5" }} className="d-block">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Ticket