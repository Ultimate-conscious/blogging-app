import { Link } from "react-router-dom"
import { LabelledInput } from "./LabelledInput"
import { useState } from "react"
import { SignupInput } from "@ultimate-conscious/common"

interface authInputs{
    heading: string
    subHeading: string
    redirect: boolean
    // here redirect is used as a boolean to conditionally remove components
    // that are not present on the signin page using the ternary operator
}

export const Auth = ({heading, subHeading, redirect}:authInputs)=>{
    const [state,setState] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="text-3xl font-extrabold">
                        {heading}
                    </div>
                    <div className="text-slate-500 pt-3">
                        {subHeading}
                        {(!redirect)? <Link className="pl-2 underline" to={'/signup'}>
                            Signup
                        </Link> : <Link className="pl-2 underline" to={'/signin'}>
                            Login
                        </Link>}
                        
                    </div>
                    {(!redirect)?"":
                    <LabelledInput label="Name" placeholder="John" onchange={(e)=>{
                        setState({
                            ...state,
                            name: e.target.value
                        })
                    }}/>
                    }
                    <LabelledInput label="Email" placeholder="Johndoe@gmail.com" onchange={(e)=>{
                        setState({
                            ...state,
                            password: e.target.value
                        })
                    }}/>
                    <LabelledInput label="Password" placeholder="*******" onchange={(e)=>{
                        //can also be done this way
                        setState(c=> ({
                            ...c,
                            email: e.target.value
                        }))
                    }}/>
                    <div className="flex justify-center pt-4">
                        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            {(redirect)?'Signup':"Login"}
                        </button>
                    </div>
                    

                </div>
                
            </div>
            
        </div>
    )
}