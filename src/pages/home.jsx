import { useContext } from "react"

import SignInContext from "../context/SignInContext"
// import Nav from "../components/navbar"

const Home = (props) => {
    const { signInContext } = useContext(SignInContext)

    return(
        <>
            <h1>Welcome to Sydey Motor Service Centre </h1>
            <h2>Home Page</h2>
            <h3>username: {props.userSignedIn && signInContext?.user?.username}</h3> 
            <h6>jwt: {props.userSignedIn && signInContext?.user?.jwt}</h6> 
        </>
    )
}

export default Home