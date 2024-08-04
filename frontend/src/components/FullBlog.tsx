import { Appbar } from "./Appbar"
import { Blog } from "../hooks"
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog}:{blog:Blog})=>{
    return (
        <div>
            <Appbar/>
            <div className="flex justify-center w-full">
                <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-2xl ">
                    <div className="col-span-8"> 
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 font-thin pt-3">
                            Posted Just Now
                        </div>
                        <div className="p-4 text-slate-700">
                            {blog.content}
                        </div>
                    </div>
                    <div className="border-l col-span-4 w-full">
                        <div className="pl-2 text-slate-500 text-lg">
                            Author
                        </div>
                        <div className="flex p-2">
                            <div className="flex flex-col justify-center pr-2">
                                <Avatar size="big" name={blog.author.name || "Anonymous"}/>
                            </div>

                            <div className="pl-2" >
                                <div className="text-xl font-bold ">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="pt-2 text-slate-600">
                                    Random catch phrase about the author
                                </div>
                            </div>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}