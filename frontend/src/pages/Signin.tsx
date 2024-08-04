import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signin = ()=>{
    
    return (
        <div className="grid grid-cols-2 p-50">
            <div className="col-span-2 lg:col-span-1">
                <Auth heading="Login to your acount" subHeading="Don't have an account?" redirect={false}/>
            </div>
            <div className="invisible lg:visible">
                <Quote/>
            </div>
        </div>
    )
}