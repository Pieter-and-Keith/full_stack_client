import { useState} from "react"
import { useNavigate } from "react-router-dom"

import api from "../config/api";
import { SignTitle, SignForm, ErrorMessage, LinkE, SignButton } from '../components/Styled'
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
            <SignTitle>Sign-in</SignTitle>
            { error ? <> <ErrorMessage>Error: {error}</ErrorMessage> </> : <> </> }
            <SignForm onSubmit={handleSubmit}>
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
                <SignButton>
                    <button type="submit" style={{margin: "10px"}}>Sign In</button>
                    <button style={{margin: "10px"}}><LinkE to="/sign_up">Sign Up</LinkE></button>
                </SignButton>
            </SignForm>
        </>
    )
}

export default SignIn