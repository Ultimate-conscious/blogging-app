import { ChangeEvent } from "react"

interface labelledInput {
    label : string
    placeholder: string
    onchange: (e: ChangeEvent<HTMLInputElement>)=> void
}

export const LabelledInput = ({label , placeholder, onchange}:labelledInput)=>{
    return <div className="pt-2">
        <div className="text-sm font-medium text-left py-2 ">{label}</div>
        <input onChange={onchange} className="w-full px-2 py-1 border rounded border-slate-200" placeholder={placeholder}></input>

    </div>
}