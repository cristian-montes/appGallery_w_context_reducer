import React, {useContext, useEffect} from 'react'
import BlogContext from '../context/blogContext'
import PostCard from './PostCard';

const PostList = () => {
    const blogContext = useContext(BlogContext);
    const {getPosts, blogPosts, loading} =  blogContext;

    useEffect(() => {
        getPosts()
    }, []);

    console.log('HERE',blogPosts);

    return(
        <div className='posts'>
            <div className='container'>
                <h2>Posts</h2>
                {
                    !loading ? (
                        <div className='posts-grid-container'>
                            {
                                blogPosts.map((post, i) =>{
                                    return(
                                        <PostCard
                                            key={i}
                                            title={post.title}
                                            image={post.image}
                                            author={post.author}
                                            date={post.date}
                                            id={post.id}
                                        />
                                    )
                                })
                            }
                        </div>
                    ) : (<div> loading... </div>)
                }
            </div>
        </div>
    )

}

export default PostList;