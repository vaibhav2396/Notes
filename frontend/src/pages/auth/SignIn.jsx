import { Link, useNavigate } from "react-router-dom"
import { Input } from "../../components/common/Input"
import { Button } from "../../components/common/Button"
import { useState } from "react"
import axios from "axios"

axios.defaults.withCredentials = true;

const SignIn = ()=>{
    const [signInInfo, setSignInInfo] = useState({
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    const login = async () => {
        try{
            const response = await axios.post("http://localhost:3000/sign-in", {
                email: signInInfo.email,
                password: signInInfo.password
            })
            navigate("/notes")
        } catch(error){
            if( error && error.response.status == 404){
                setErrorMessage("User doesn't exist")
            } else if( error && error.response.status == 401){
                setErrorMessage("Incorrect password")
            } else{
                setErrorMessage("error while sign in")
            }
        }
    }

    return(
        <div className="flex justify-center items-center h-screen bg">
            <div className="flex flex-col">
                <div className="flex justify-center text-6xl mb-4">
                    ThoughtDock
                </div>
                <div>
                    <Input type={"text"} placeholder={"Email"}
                        onChange={(e)=>{
                            setSignInInfo((oldData)=>({
                                ...oldData,
                                email: e.target.value
                            }))
                        }}
                    />
                    <Input type={"password"} placeholder={"Enter your password"}
                        onChange={(e)=>{
                            setSignInInfo((oldData)=>({
                                ...oldData,
                                password: e.target.value
                            }))
                        }}
                    />
                    <Button buttontext={"Sign in"} onClick={login}/>
                    {errorMessage && <div className="m-2 text-red-500">{errorMessage}</div> }
                    <div className="m-2">
                        Don't have an account? <Link to={'/signup'} className="underline">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {SignIn}