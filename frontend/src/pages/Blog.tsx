import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { Appbar } from "../components/Appbar";


export const Blog = ()=>{
    const {id} = useParams();
    const {loading,blog} = useBlog({id:id || ""});


    if(loading || !blog){
        return <div>
        <Appbar/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
        <BlogSkeleton/>
    </div>
    }
    
    return (
        <div>
            <FullBlog blog={blog}/>
        </div>

    )
}