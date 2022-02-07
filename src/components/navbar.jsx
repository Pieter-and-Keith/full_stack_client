import { useEffect } from "react";
import { Link } from "react-router-dom";
import {useGlobalState} from '../utils/StateContext'

const Nav = () => {

    const {store,dispatch} = useGlobalState()
	const {userSignedIn} = store
    const myUserName = sessionStorage.getItem('user')

    // useEffect(() => {
    //     myUserName = sessionStorage.getItem('user')
    //     console.log("sessionStorage myUserName:", myUserName)
    // },[])


    function handleSignOut(event) {
		event.preventDefault()
		dispatch({type: 'setUserSignedIn', data: null})
        dispatch({type: 'setToken', data: null})

        sessionStorage.setItem("token", null)
        sessionStorage.setItem("user", null)

	}

    return (
        <nav style={{display:"flex", justifyContent:"flex-end"}}>
            { userSignedIn === "admin" &&
            <Link to="/admin" style={{margin:"5px"}}>Admin Page</Link>
            }
            <Link to="/" style={{margin:"5px"}}>Home</Link>
            { userSignedIn ? 
                <>
                    <button onClick={handleSignOut} style={{margin:"5px"}}>Sign Out</button>	
                </>
            :
                <>
                    <Link to="/sign_up" style={{margin:"5px"}}>Sign Up</Link>
                    <Link to="/sign_in" style={{margin:"5px"}}>Sign In</Link>
                </>
            }
        </nav>
    )
}

export default Nav