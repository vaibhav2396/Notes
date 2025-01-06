const Button = ({buttontext, onClick})=>{
    return(
        <div className="m-2 flex flex-col">
            <button className="border rounded p-2 bg-slate-600 text-white"
                onClick={onClick}
            >{buttontext}</button>
        </div>
    )
}

export {Button}