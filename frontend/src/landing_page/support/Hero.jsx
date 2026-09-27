
const Hero = () => {
    return (
        <section className="container-fluid bg-primary px-3 px-md-5" id="supportHero">
            <div className="p-3 p-md-5" id="supportWrapper">
                <h4>Support Portal</h4>
                <a className="fs-5" href="">Track Tickets</a>
            </div>

            <div className="row px-2 px-md-5 pb-5">
                <div className="col-12 col-md-6 px-2 px-md-5 mb-5 mb-md-3" style={{ color: "white" }}>
                    <h1 className="fs-4 lh-lg">Search for an answer or browse help topics to create a ticket</h1>

                    <input type="text" placeholder="Eg: how do I activate F&O, why is my order getting rejected.." className="mb-4" />

                    <div className="d-flex flex-wrap gap-3">
                        <a href="">Track account opening</a>
                        <a href="">Track segment activation</a>
                        <a href="">Intraday margins</a>
                        <a href="">Kite user manual</a>
                    </div>
                </div>

                <div className="col-12 col-md-6 px-2 px-md-5" style={{ color: "white" }}>
                    <h1 className="fs-4">Featured</h1>

                    <ol>
                        <li><a href="">Current Takeovers and Delisting</a></li>
                        <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Hero