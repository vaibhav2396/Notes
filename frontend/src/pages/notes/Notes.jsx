import { MainNote } from "../../components/MainNote/MainNote"
import { Sidebar } from "../../components/Sidebar/Sidebar"

const Notes = () =>{
    return(
        <div className="grid grid-cols-4 h-screen">
            <div className="col-span-1 bg-gray-900">
                <div className="p-4">
                    <Sidebar></Sidebar>
                </div>
            </div>
            <div className="col-span-3 bg-black">
                <div className="p-8">
                    <MainNote></MainNote>
                </div>
            </div>
        </div>
    )
}

export { Notes }