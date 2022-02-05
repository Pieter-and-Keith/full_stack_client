import { Link } from "react-router-dom";
import {useGlobalState} from '../utils/StateContext'

const Nav = () => {

    const {store,dispatch} = useGlobalState()
	const {userSignedIn} = store

    function handleSignOut(event) {
		event.preventDefault()
        userSignedIn.username
		dispatch({type: 'setUserSignedIn', data: null})
	}

    return (
        <nav style={{display:"flex", justifyContent:"flex-end"}}>
            <Link to="/" style={{margin:"5px"}}>Home</Link>
            {userSignedIn ? 
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