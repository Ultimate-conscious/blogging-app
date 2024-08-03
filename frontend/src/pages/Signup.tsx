import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signup = ()=>{
    
    return (
        <div className="grid grid-cols-2 p-50">
            <div>
                <Auth heading="Create an Account" subHeading="Already have an acount?" redirect={true}/>
            </div>
            <div className="invisible lg:visible">
                <Quote/>
            </div>
        </div>
    )
}