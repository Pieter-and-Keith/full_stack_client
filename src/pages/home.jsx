import { useContext } from "react"

import LoginContext from "../context/SignInContext"
// import Nav from "../components/navbar"

const Home = (props) => {
    const { loginContext } = useContext(LoginContext)

    return(
        <>
            <h1>Welcome to Sydey Motor Service Centre </h1>
            <h2>Home Page</h2>
            <h3>username: {props.userSignedIn && loginContext?.user?.username}</h3> 
            <h6>jwt: {props.userSignedIn && loginContext?.user?.jwt}</h6> 
        </>
    )
}

export default Home