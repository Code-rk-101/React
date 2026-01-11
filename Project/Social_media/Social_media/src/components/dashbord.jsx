import Post from "./post";
import Style from "./dashbord.module.css" 

function Dashboard ()
{
    return(
        <>
            <div className={`${Style.main}`}>
                <div className={`${Style.info}`}></div>
                <div className= {`${Style.postContainer}`}>
                    <Post></Post>
                    <Post></Post>
                    <Post></Post>
                </div>
                
            </div>
        </>
    )
}
export default Dashboard;