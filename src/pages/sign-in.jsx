import { useState} from "react"
import { useNavigate } from "react-router-dom"

import api from "../config/api";
import {useGlobalState} from '../utils/StateContext'


const SignIn = () => {
    const navigate = useNavigate()

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
        dispatch({type: 'setToken', data: user.jwt});
        dispatch({type: 'setUserSignedIn', data: user.username});
        sessionStorage.setItem("token", user.jwt);
        sessionStorage.setItem("user", user.username);
        navigate("/")
    };

    return (
        <>
            <h1>Sign-in</h1>
            <form onSubmit={handleSubmit}>
                <div style={{padding:"10px"}}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value={data.email} onChange={handleChange} />
                </div>
                <div style={{padding:"10px"}}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={data.password} onChange={handleChange}/>
                </div>
                <button type="submit">Sign In</button>
            </form>
        </>
    )
}

export default SignIn