import { useContext } from 'react';
import Post from './post'
import PostListContext from '../store/post-list-store';
import WelcomeMessage from './welcomeMessage';
import Loader from './Loader';

function PostList ()
{
    const {PostList,fetching} = useContext(PostListContext);

    return (
        <>
            {fetching && <Loader />}
            {!fetching && PostList.length === 0 && 
            <WelcomeMessage />}

            { 
                !fetching && PostList.map(
                    (post)=> (<Post key = {post.id} post = {post}/>)
                )
            }
        </>
    )
}
export default PostList;