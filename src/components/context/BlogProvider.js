import React, {useReducer} from "react";
import BlogContext from'./blogContext';
import blogReducer from './blogReducer'

const BlogProvider = props => {

    const initialState = {
        blogPost:[],
        currentBlogPost: null,
        loading: true
    }

    const [state, dispatch] = useReducer(blogReducer, initialState);

    const getPosts = async () => {
        try {
            dispatch({type: 'SENDING_REQUEST'});
            const res = await fetch('/posts');
            const data = await res.json();
            dispatch({type:'REQUEST_FINISHED'});
            dispatch({ type: 'SET_POSTS', payload: data})
        } catch (error) {
            console.log(error)
        }

    }

    return(
        <BlogContext.Provider value={{}}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogProvider;