import { useState } from "react";
import { Appbar } from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = ()=>{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    return (
        <div>
            <Appbar/>
            <div className="pt-4">
            <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Publish New Blog Post</h2>
                <form className="space-y-6">
                    <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    </div>
                    <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                        Content:
                    </label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-64 resize-y"
                    />
                    </div>
                    <button
                    type="submit"
                    onClick={async (e) => {
                        e.preventDefault();

                        const resp = await axios.post(`${BACKEND_URL}/api/v1/blog`,{title,content},{
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem('token')}`
                            }
                        }
                        )
                        console.log();
                    
                        navigate(`/blog/${resp.data.id}`);
                        
                      }}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
                    >
                    Publish
                    </button>
                </form>
                </div>
                
            </div>
        </div>
    )
}