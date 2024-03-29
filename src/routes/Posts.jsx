import PostList from "../components/PostList.jsx";
import {Outlet} from "react-router-dom";

function Posts() {
    return (
        <>
            <Outlet/>
            <main>
                <PostList/>
            </main>
        </>

    )
}

export default Posts

export async function loader() {
    const response = await fetch('http://localhost:3000/posts')
    return await response.json()
}