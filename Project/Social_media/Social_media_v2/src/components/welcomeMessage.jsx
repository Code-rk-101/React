
const WelcomeMessage = ()=>
{
    return (
        <main> 

            <div className="b-example-divider"></div> 
            <div className="container my-5"> 

                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"> 

                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3"> 

                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">There is no Post</h1> 
                        <p className="lead">
                            Social Hive is your space to share moments that matter—swap ideas, celebrate wins, and stay inspired by the people who motivate you every day. Capture quick updates, dive into meaningful conversations, and discover new perspectives through the community’s posts, all tailored to keep your feed fresh, vibrant, and uniquely yours
                        </p> 

                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"> 

                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                            >Get Post</button> 
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Refesh</button> 

                        </div> 

                    </div> 

                    {/* <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg"> 

                        <img className="rounded-lg-3" 
                        src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-docs.png" 
                        alt="" width="720"/> 

                    </div>  */}

                </div> 

            </div> 

            <div className="b-example-divider mb-0"></div> 

        </main>
    )
}

export default WelcomeMessage;