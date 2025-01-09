import { NewNoteButton } from "./NewNoteButton"
import { Note } from "./Note"

const Sidebar = ()=>{
    return(
        <div>
            <div className="text-4xl font-semibold text-white">
                ThoughtDock
            </div>
            <div className="mx-8">
                <div className="my-8">
                    <NewNoteButton buttontext={"+ New Note"} /> 
                </div>
                <div className="mb-2">
                    <Note></Note>
                </div>
                <div className="mb-2">
                    <Note></Note>
                </div>
                <div className="mb-2">
                    <Note></Note>
                </div>
                <div className="mb-2">
                    <Note></Note>
                </div>
                <div className="mb-2">
                    <Note></Note>
                </div>
                <div className="mb-2">
                    <Note></Note>
                </div>
            </div>
        </div>
    )
}

export {Sidebar}