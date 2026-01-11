import { createContext, useReducer } from "react";

const PostListContext = createContext({
    PostList: [],
    addPost:()=> {},
    deletePost: ()=> {},
    editPost: ()=> {},
    setReaction: ()=>{},
    refresh: () =>{},
});


const PostListReducer = (currPostList,action)=>
{
    let newPostList = currPostList;
    if(action.type === "ADD_POST")
    {
        newPostList = 
        [
            action.payload,
            ...currPostList
        ]
    }
    else if(action.type === "DELETE_POST")
    {
        newPostList = currPostList.filter(post=>post.id !== action.payload.id)
    }
    else if(action.type === "EDIT_POST")
    {
        //
    }
    else if (action.type === "REACTION") 
    {
        const idx = { like: 0, comment: 1, share: 2 }[action.payload.msg];
        if (idx === undefined) 
        return currPostList;

        return currPostList.map(post =>

            post.id !== action.payload.id
            ? post
            : {
                ...post,
                Reaction: post.Reaction.map((count, i) =>
                    i === idx ? count + 1 : count
                ),
            }
        );
    }
    else if(action.type === "REFRESH")
    {
        newPostList = action.payload.posts;
    }

    return newPostList;
}

export function PostListContextProvider ({children})
{
    const [PostList,dispatchPostList] = useReducer(PostListReducer,[]);

    const addPost = (userId,Title,Caption,Tags)=>
    {
        const postToAdd =
        {
            type: 'ADD_POST',
            payload: 
            {
                UserId: userId,
                id: Date.now(),
                Title: Title,
                Caption: Caption,
                Reaction: [0,0,0],
                Tags: Tags
            }
        }
        dispatchPostList(postToAdd);
    }

    const deletePost = (id)=>
    {
        const postToDelete = 
        {
            type: "DELETE_POST",
            payload: 
            {
                id
            }
        }
        dispatchPostList(postToDelete);
    }

    const editPost = (id)=>
    {
        console.log(`edit function called for ${id}`);
    }

    const refresh = (posts)=>
    {
        const normalizeReactions = (reactions) => {
            if (Array.isArray(reactions)) {
                const padded = [...reactions, 0, 0, 0];
                return padded.slice(0, 3);
            }

            if (reactions && typeof reactions === 'object') {
                return [
                    reactions.likes ?? reactions.like ?? 0,
                    reactions.comments ?? reactions.comment ?? reactions.dislikes ?? 0,
                    reactions.shares ?? reactions.share ?? 0,
                ];
            }

            if (typeof reactions === 'number') {
                return [reactions, 0, 0];
            }

            return [0, 0, 0];
        };

        const normalizedPosts = posts.map(post => ({
            UserId: post.userId,
            id: post.id,
            Title: post.title,
            Caption: post.body,
            Reaction: normalizeReactions(post.reactions),
            Tags: post.tags ?? []
        }));

        const setOnRefresh = 
        {
            type:"REFRESH",
            payload: 
            {
                posts: normalizedPosts
            }
        }
        dispatchPostList(setOnRefresh);
    }

    const setReaction = (msg,id)=>
    {
        const setToReaction = 
        {
            type: "REACTION",
            payload: 
            {
                msg,
                id,
            }
        }
        dispatchPostList(setToReaction);
    }

    return (
        <PostListContext.Provider value = {
            {
                PostList,
                addPost,
                deletePost,
                editPost,
                setReaction,
                refresh
            }
        }>
            {children}
        </PostListContext.Provider>
    )
};

export default PostListContext;
