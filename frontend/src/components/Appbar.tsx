import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"


export const Appbar = ()=>{
    return (
        <div className="border-b flex justify-between px-10 py-2">
            <Link className="flex flex-col justify-center cursor-pointer" to={'/blogs'}>
                <div>
                    Medium
                </div>
            </Link>
            <div className="flex">
                <div className="pr-3">
                    <Link to={'/publish'}>
                        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2">
                            New Blog
                        </button>
                    </Link>
                </div>
                <Avatar size="big" name={localStorage.getItem('name')|| ''}/>
            </div>
        </div>
    )
}