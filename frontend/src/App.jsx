import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignIn } from "./pages/auth/SignIn"
import { SignUp } from "./pages/auth/SignUp"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" Component={SignUp} />
          <Route path="/signin" Component={SignIn} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
