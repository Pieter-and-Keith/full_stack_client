import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

import Context from "../context/context"
import Nav from "../components/navbar"
import api from "../config/api";

const SignIn = () => {
    const { setContext } = useContext(Context);
    const navigate = useNavigate()

    // METHOD 3:
    const [data, setData] = useState({
            email: "",
            password: ""
    });
        
        const handleChange = (e) => {
        const value = e.target.value;
            setData({
                ...data,
                [e.target.name]: value
            });
        };

        const handleSubmit = async (event) => {
            event.preventDefault()
            const userData = {
                email: data.email,
                password: data.password
            };
            const user = await api.signIn(userData);
            console.log(user);
            setContext({ user })
            navigate("/")
        };

    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    // };

    // const signInResponse = await fetch("api/auth/sign_in", handleChange)
    // const user = await signInResponse.json()
    // console.log(user)
    // setContext({ user })

    // METHOD 2:

    // const [user, setUser] = useState({
    //     email: "",
    //     password: ""
    // });
    
    //   const handleChange = (e) => {
    //     const value = e.target.value;
    //     setUser({
    //       ...user,
    //       [e.target.name]: value
    //     });
    //   };
    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     const userData = {
    //         email: user.email,
    //         password: user.password
    //     };
    //     axios
    //     .post("api/auth/sign_in", userData)
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch((error) => {
    //         if (error.response) {
    //           console.log(error.response);
    //           console.log("server responded");
    //         } else if (error.request) {
    //           console.log("network error");
    //         } else {
    //           console.log(error);
    //         }
    //     });
    //     navigate("/")
    // };

    return (
        <>
            <Nav />
            <h1>Sing-in Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={data.email} onChange={handleChange} />
                <label htmlFor="password">password</label>
                <input type="password" name="password" value={data.password} onChange={handleChange}/>
                <button type="submit">Sign In</button>
            </form>
        </>
    )

    // METHOD 1:
    // const { setContext } = useContext(Context)
    // const navigate = useNavigate()

    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     const email = event.target.email.value 
    //     const password = event.target.password.value
    //     console.log("email: ", email)
    //     console.log("password: ", password)
    //     const options = {
    //          method:"POST",
    //          headers: {
    //              Accept: "application/json",
    //              "Content-Type": "application/json;charset=UTF-8"
    //          },
    //              body: JSON.stringify({
    //              "email": email, 
    //              "password": password
    //          })
    //     }
    //      const signInResponse = await fetch("api/auth/sign_in", options)
    //      const user = await signInResponse.json()
    //      console.log(user)
    //      setContext({ user })
    //      navigate("/")
    // }

    // return (
    //     <>
    //         <Nav />
    //         <h1>Sing-in Page</h1>
    //         <form onSubmit={handleSubmit}>
    //             <label htmlFor="email">Email</label>
    //             <input type="email" name="email" />
    //             <label htmlFor="password">password</label>
    //             <input type="password" name="password" />
    //             <button type="submit">Login</button>
    //         </form>
    //     </>
    // )
}

export default SignIn