const Input = ({type,placeholder,onChange})=>{
    return(
        <div className="m-2 flex flex-col">
            <input type={type} placeholder={placeholder} className="p-2 border rounded" onChange={(e)=>{onChange(e)}} />
        </div>
    )
}
export {Input}