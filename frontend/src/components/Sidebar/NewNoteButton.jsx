const NewNoteButton = ({buttontext, onClick})=>{
    return(
        <div className="flex flex-col">
            <button className="text-white bg-gray-800 p-3 border-0 rounded-md"
                onClick={onClick}
            >{buttontext}</button>
        </div>
    )
}

export {NewNoteButton}