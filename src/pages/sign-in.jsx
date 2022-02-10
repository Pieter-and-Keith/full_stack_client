import { useState} from "react"
import { Link, useNavigate } from "react-router-dom"

import api from "../config/api";
import { SignInTitle, SignInForm, ErrorDisplay, LinkE, SignInButton } from '../components/Styled'
import {useGlobalState} from '../utils/StateContext'


const SignIn = () => {
    const navigate = useNavigate()

    const [error, setError] = useState("")

    const [data, setData] = useState({
            email: "",
            password: ""
    });
    const {dispatch} = useGlobalState()

    const handleChange = (e) => {
        const target = e.target;
        setData({
            ...data,
            [target.name]: target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        const userData = {
            email: data.email,
            password: data.password
        };
        const user = await api.signIn(userData);
        if (!user.username) {
            setError(user)
        } else {
        dispatch({type: 'setToken', data: user.jwt});
        dispatch({type: 'setUserSignedIn', data: user.username});
        sessionStorage.setItem("token", user.jwt);
        sessionStorage.setItem("user", user.username);
        navigate("/")
        }
    };

    return (
        <>
            <SignInTitle>Sign-in</SignInTitle>
            { error ? <> <ErrorDisplay>Error: {error}</ErrorDisplay> </> : <> </> }
            <SignInForm onSubmit={handleSubmit}>
                <div style={{margin:"5px"}}>
                    <label htmlFor="email">Email:</label>
                    <br></br>
                    <input type="email" name="email" id="email" value={data.email} onChange={handleChange} />
                </div>
                <div style={{margin:"5px"}}>
                    <label htmlFor="password">Password:</label>
                    <br></br>
                    <input type="password" name="password" id="password" value={data.password} onChange={handleChange}/>
                </div>
                <SignInButton>
                    <button type="submit" style={{margin: "10px"}}>Sign In</button>
                    <button style={{margin: "10px"}}><LinkE to="/sign_up">Sign Up</LinkE></button>
                </SignInButton>
            </SignInForm>
        </>
    )
}

export default SignIn