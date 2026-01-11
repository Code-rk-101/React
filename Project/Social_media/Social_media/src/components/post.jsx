import { useContext } from "react";
import style from "./post.module.css"
import PostListContext from "../store/post-list-store";

function Post ({post})
{
    const {PostList,deletePost,editPost,setReaction} = useContext(PostListContext)

    const handleOnClick = (msg,id)=>
    {
        setReaction(msg,id);
    }
    return (
        <div className={`card ${style.cards}`} style = 
        {{
            width: "50%",
            minWidth: "400px",
        }}>
            <img src="https://tse1.mm.bing.net/th/id/OIP.PqgeF2SjkZjKiLyjqZGT6QHaEo?rs=1&pid=ImgDetMain&o=7&rm=3" className={`card-img-top ${style.cardImgTop}`}/>
            <div className={`card-body ${style.cardBody}`}>

                <h5 className= {`card-title ${style.cardTitle}`}>{post.Title}</h5>

                <p className="card-text">{post.Caption}</p>

                <div className={style.reaction}>

                    <div >
                        <i className={`bi bi-heart ${style.icon}`} 
                        id="like" 
                        onClick={()=>{handleOnClick("like",post.id)}}></i>
                        <h5>{post.Reaction[0]}</h5>
                    </div>
                    
                    <div >
                        <i className="bi bi-chat" 
                        id="comment"
                        onClick={()=>{handleOnClick("comment",post.id)}}></i>
                        <h5>{post.Reaction[1]}</h5>
                    </div>
                    
                    <div>
                        <i className="bi bi-send" 
                        id="share"
                        onClick={()=>{handleOnClick("share",post.id)}}></i>
                        <h5>{post.Reaction[2]}</h5>
                    </div>
                    
                </div>

                <div className="hastag">
                    {post.Tags.map((tag, index) => (
                        <a key={`${tag}-${index}`} href="#" className={style.anc}>{` #${tag}`}</a>
                    ))}
                </div>
                                            
                <div className={style.edits}>
                    <button type="button" className={`btn btn-primary ${style.edit_btn}`} 
                    onClick={()=>{deletePost(post.id)}}>
                    <i className="bi bi-trash"></i>
                    </button>

                    <button type="button" className= {`btn btn-primary ${style.edit_btn}`}
                    onClick={()=>{editPost(post.id)}}>
                    <i className="bi bi-pencil"></i>
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Post;