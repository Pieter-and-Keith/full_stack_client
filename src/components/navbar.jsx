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
        <nav>
            <Link to="/">Home</Link>
            {userSignedIn ? 
                <>
                    <button onClick={handleSignOut}>Sign Out</button>	
                </>
            :
                <>
                    <Link to="/sign_in">Sign In</Link>
                    <Link to="/sign_up">Sign Up</Link>
                </>
            }
        </nav>
    )
}

export default Nav