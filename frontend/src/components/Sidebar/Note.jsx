const Note = () =>{
    const title = "Reflection on My First Year of College consectetur"
    const content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste mollitia repellendus quasi dolores. Fugiat omnis pariatur odit eum dolorem ipsa, modi assumenda perferendis sapiente rerum soluta dolores molestias. Excepturi, reiciendis?"
    const date = "26/04/2024"
    return (
        <div className="text-white bg-gray-800 px-6 py-4 border-0 rounded-md">
            <div className="font-semibold">
                {title.length <= 50 ? title: title.slice(0,50) + "..."}
            </div>
            <div className="mt-4 text-gray-500">
                <span className="mr-4">{date}</span>
                {content.length <= 100? content : content.slice(0,100) + "..."}
            </div>
        </div>
    )
}

export { Note }