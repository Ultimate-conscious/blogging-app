import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"



export const  Blogs = ()=>{

    const {loading,blogs} = useBlogs();


    if(loading){
        return (
            <div>
                <Appbar/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
            </div>
        )
    }

    return (
        <div>
            <Appbar/>
        <div className="flex justify-center ">
        <div >
            {blogs.map(x => <BlogCard 
            title={x.title} 
            content={x.content} 
            authorName={x.author.name || "Anynomous"} 
            publishedDate="just now" 
            id={x.id}
            key={x.id}/>)}
        </div>
        </div>
        </div>
    )
}