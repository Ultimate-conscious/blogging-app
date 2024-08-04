import { Link } from "react-router-dom"

interface blogcardProps {
    id:string,
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: blogcardProps)=>{
    return (
        <Link to={`/blog/${id}`} >
        <div className="p-4 border-b border-slate-200 w-screen max-w-screen-md">
            <div className="flex ">
                <div className="flex justify-center flex-col pr-2">
                    <Avatar size="small" name={authorName}/> 
                </div>
                <div className="text-slate-500">
                    {authorName} .
                </div>
                <div className="pl-2 font-thin text-slate-500">
                    {publishedDate}
                </div>
                 
            </div>
            <div className="font-semibold text-2xl">
                {title}
            </div>
            <div>
                {content.slice(0,100)+'...'}
            </div>
            <div className="pt-3 text-slate-500 text-sm font-thin">
                {`${Math.ceil(content.length/300)} minute(s) read`}
            </div>
        
        </div>
        </Link>
    )
}

export function Avatar({name, size}:
    {
        name:string,
        size: "small" | "big"
    }
    ){
    return (

        <div className={`relative inline-flex items-center justify-center  ${(size=="small")?"w-6 h-6":"w-9 h-9"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className={`text-${(size=="small")?"sm":"lg"} text-gray-600 dark:text-gray-300`}>{(name.split(' ').length>1)? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`:name[0]}</span>
        </div>

    )
}