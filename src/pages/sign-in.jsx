import { useState} from "react"
import { Link, useNavigate } from "react-router-dom"

import api from "../config/api";
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
            <h1>Sign-in</h1>
            { error ? <> <h3>Error: {error}</h3> </> : <> </> }
            <form onSubmit={handleSubmit}>
                <div style={{padding:"10px"}}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={data.email} onChange={handleChange} />
                </div>
                <div style={{padding:"10px"}}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" value={data.password} onChange={handleChange}/>
                </div>
                <button type="submit" style={{margin:"5px"}}>Sign In</button>
                <Link to="/sign_up" style={{margin:"5px"}}><button>Sign Up</button></Link>
            </form>
        </>
    )
}

export default SignIn