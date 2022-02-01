

const Login = () => {
    
    const handleOnSubmit = async (event) => {
        event.preventDefault()
        // const response = await fetch("/api/options");    // GET
        // let service_options = await response.json()
        // console.log(service_options)
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
        const loginResponse = await fetch("api/auth/sign_in", options)
        const user = await loginResponse.json()
        console.log(user)
        
        
    }

    return (
        <>
            <h1>Login Page</h1>
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

export default Login