import { useContext } from "react"
import full_stack_server from "../config/api"

import Context from "../context/context"


const UserDetails = () => {
    const { context } = useContext(Context)

    return(
        <>
        <h2>User detail Page</h2>
        <h3>Welcome: {context?.user?.username}</h3> 
        <h4>id: {context?.user?.id}</h4>
        <h6>jwt: {context.user?.jwt}</h6>
        {/* <form onSubmit={handleSubmit} */}
        </>
    )
}

export default UserDetails