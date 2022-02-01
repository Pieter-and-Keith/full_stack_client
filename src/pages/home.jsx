import { useContext } from "react"

import Context from "../context/context"


const Home = () => {
    const { context } = useContext(Context)

    return(
        <>
        <h1>Home Page</h1>
        <h3>username: {context?.user?.username}</h3> 
        <h4>id: {context?.user?.id}</h4>
        <h6>jwt: {context.user?.jwt}</h6>
        </>
    )
}

export default Home