import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignIn } from "./pages/auth/SignIn"
import { SignUp } from "./pages/auth/SignUp"
import { Notes } from "./pages/notes/notes"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index Component={SignIn}/>
          <Route path="/signup" Component={SignUp} />
          <Route path="/signin" Component={SignIn} />
          <Route path="/notes" Component={Notes} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
