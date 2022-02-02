import { useContext } from "react"
import full_stack_server from "../config/api"

import Context from "../context/context"
import Nav from "../components/navbar"

const Home = () => {
    const { context } = useContext(Context)

    return(
        <>
        <Nav />
        <h1>Welcome to Sydey Motor Service Centre </h1>
        <h2>Home Page</h2>
        <h3>username: {context?.user?.username}</h3> 
        <h4>id: {context?.user?.id}</h4>
        <h6>jwt: {context.user?.jwt}</h6>
        </>
    )
}

export default Home