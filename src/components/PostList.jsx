import Post from "./Post.jsx";
import classes from './PostsList.module.css';
import {useLoaderData} from "react-router-dom";


function PostList() {
    const posts = useLoaderData()
    return (
        <main>
            {posts.length > 0 &&
                <ul className={classes.posts}>
                    {
                        posts.map((post, i) => <Post id={post.id} author={post.author} body={post.body} key={i}/>)
                    }

                </ul>
            }
            {posts.length === 0 &&
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            }
        </main>
    )
}

export default PostList