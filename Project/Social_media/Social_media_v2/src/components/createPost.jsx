import { useContext, useRef } from "react";
import styles from "./createPost.module.css"
import PostListContext from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

function CreatePost ({setSelectedBar})
{
    const {addPost} = useContext(PostListContext);
    const navigate = useNavigate();

    const userIdElement = useRef();
    const TitleElement = useRef();
    const CaptionElement = useRef();
    const TagsElement = useRef();

    const handleSubmit = (event,) =>
    {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const Title = TitleElement.current.value;
        const Caption = CaptionElement.current.value;
        const Tags = TagsElement.current.value.split(" ");

        handleOnCancle();

        fetch('https://dummyjson.com/posts/add', 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
            {
                userId: userId,
                title: Title,
                body: Caption,
                tags: Tags
            })
        })
        .then(res => res.json())
        .then(post =>
            {

                (addPost(post));
                navigate("/");
                setSelectedBar && setSelectedBar("Home");
            }
        );
    }
    const handleOnCancle = ()=> 
    {
        userIdElement.current.value = "";
        TitleElement.current.value = "";
        CaptionElement.current.value = "";
        TagsElement.current.value = "";
    }
    return (
        <div>
            <main className="form-signin w-100 m-auto"> 
                <form  onSubmit = {handleSubmit}> 

                    <center>
                        <h1 className="h3 mb-3 fw-normal">Enter Post Details</h1>
                    </center>

                    <div className={`${styles.imgUp}`}>
                        <button type="button" className="btn btn-success">
                            <i className="bi bi-plus-lg"></i>
                        </button>
                         
                    </div>

                    <div className={`form-floating ${styles.inpData}`}>  

                        <input type="text" className="form-control" id="floatingUser_id" placeholder="User_id"
                        ref={userIdElement}
                        /> 
                        
                        <label htmlFor="floatingUser_id">User id</label> 

                    </div> 
                    
                    <div className={`form-floating ${styles.inpData}`}>  

                        <input type="text" className="form-control" id="floatingTitle" 
                        placeholder="Title"
                        ref={TitleElement}
                        /> 
                        
                        <label htmlFor="floatingTitle">Title</label> 

                    </div> 

                    <div className={`form-floating ${styles.inpData}`}> 
                        
                        <input type="text" className="form-control" id="floatingCaption" placeholder="Caption"
                        ref={CaptionElement}
                        /> 

                        <label htmlFor="floatingCaption">Caption</label>

                    </div> 

                    <div className={`form-floating ${styles.inpData}`}> 

                        <input type="text" className="form-control" id="floatingTags" placeholder="Tags"
                         ref={TagsElement}
                         /> 

                        <label htmlFor="floatingTags">Tags</label>

                    </div> 

                    <div className={`form-floating ${styles.inpData} ${styles.submitBtn}`} >

                        <button 
                        type="button" 
                        className={`btn btn-danger ${styles.create}`}
                        onClick={handleOnCancle}>Cancel</button>

                        <button 
                        type="submit" 
                        className={`btn btn-success ${styles.cancel}`}
                        onSubmit = {handleSubmit}>Post</button>

                    </div> 
         
                </form> 
            </main>
        </div>
    )
}

// router can be used to submit the form main root
// export async function PostAction(data) 
// {
    
//     const fromData = await data.request.formData();
//     const postData = Object.fromEntries(fromData);
//     postData.tags = postData.tags.split(" ");
//     console.log(postData);
    
//     fetch('https://dummyjson.com/posts/add', 
//     {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(postData)
//     })
//     .then(res => res.json())
//     .then(post =>
//         {

//             console.log(post);
            
//         }
//     );
//     return redirect("/");
// }
export default CreatePost;