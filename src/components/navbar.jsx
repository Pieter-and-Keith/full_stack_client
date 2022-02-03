import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/sign_in">Sign In</Link>
            <Link to="/sign_up">Sign Up</Link>
            <Link to="/options">Options</Link>
        </nav>
    )
}

export default Nav