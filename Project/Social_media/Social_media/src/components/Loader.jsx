const Loader = ()=>
{
    return <>
        <div className="d-flex justify-content-center spinner">

            <div className="spinner-border" role="status"
            style = {{
                height: "5rem",
                width: "5rem"}}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        <h1>Loading...</h1>
    </>
}

export default Loader;