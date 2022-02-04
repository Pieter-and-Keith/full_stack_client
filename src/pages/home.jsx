import { useContext } from "react"

import LoginContext from "../context/SignInContext"
// import Nav from "../components/navbar"

const Home = () => {
    const { loginContext } = useContext(LoginContext)

    return(
        <>
            <h1>Welcome to Sydey Motor Service Centre </h1>
            <h2>Home Page</h2>
            <h3>username: {loginContext?.user?.username}</h3> 
            <h4>id: {loginContext?.user?.id}</h4>
            <h6>jwt: {loginContext?.user?.jwt}</h6>
        </>
    )
}

export default Home