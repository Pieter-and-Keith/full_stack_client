import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import Context from "../context/context"
import Nav from "../components/navbar"

const SignIn = () => {
    const { setContext } = useContext(Context)
    const navigate = useNavigate()
    
    const handleOnSubmit = async (event) => {
        event.preventDefault()
        const email = event.target.email.value 
        const password = event.target.password.value

        console.log("email: ", email)
        console.log("password: ", password)

        const options = {
            method:"POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({"email": email, "password": password})
        }
        const signInResponse = await fetch("api/auth/sign_in", options)
        const user = await signInResponse.json()
        console.log(user)
        setContext({ user })
        navigate("/")
    }

    return (
        <>
            <Nav />
            <h1>Sing-in Page</h1>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" />
                <label htmlFor="password">password</label>
                <input type="text" name="password" />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default SignIn