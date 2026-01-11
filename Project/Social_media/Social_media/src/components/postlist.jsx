import { useContext, useEffect, useState } from 'react';
import Post from './post'
import PostListContext from '../store/post-list-store';
import WelcomeMessage from './welcomeMessage';
import Loader from './Loader';

function PostList ()
{
    const {PostList,refresh} = useContext(PostListContext);

    const[fetching,setFetching] = useState(true);

    useEffect(
        () =>
            {
                const controller = new AbortController();
                const signal = controller.signal;
                fetch('https://dummyjson.com/posts',{signal})
                .then(res => res.json())
                .then(data =>
                    {
                        refresh(data.posts);
                        setFetching(false);
                    }
                )
                .catch(() =>
                    {
                        refresh([]);
                    }
                )
            
                return ()=>
                {
                    controller.abort();
                }
            }
            ,[]);

    
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