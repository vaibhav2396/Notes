import { Link, useNavigate } from "react-router-dom"
import { Input } from "../../components/common/Input"
import { Button } from "../../components/common/Button"
import { useState } from "react"
import axios from "axios"

const SignUp = ()=>{
    const [signUpInfo, setSignUpInfo] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    const createUser = async () => {
        try{
            const response = await axios.post("http://localhost:3000/sign-up", {
                name: signUpInfo.name,
                email: signUpInfo.email,
                password: signUpInfo.password
            })
            navigate('/signin')  
        }
        catch(error){
            if(error.response && error.response.status == 409){
                setErrorMessage('User with this email already exists');
            } else {
                setErrorMessage('Error while signing up');
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
                    <Input type={"text"} placeholder={"Full Name"}
                        onChange={(e)=>{
                            setSignUpInfo((oldData)=>({
                                ...oldData,
                                name: e.target.value
                            }))
                        }}
                    />
                    <Input type={"text"} placeholder={"Email"}
                        onChange={(e)=>{
                            setSignUpInfo((oldData)=>({
                                ...oldData,
                                email: e.target.value
                            }))
                        }}
                    />
                    <Input type={"password"} placeholder={"Enter your password"}
                        onChange={(e)=>{
                            setSignUpInfo((oldData)=>({
                                ...oldData,
                                password: e.target.value
                            }))
                        }}
                    />
                    <Button buttontext={"Create account"} onClick={createUser}/>
                    {errorMessage && <div className="m-2 text-red-500">{errorMessage}</div> }
                    <div className="m-2">
                        Already have an account? <Link to={'/signin'} className="underline">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {SignUp}