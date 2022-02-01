import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/sign_in">Sign In</Link>
            <Lint to="/sign_up">Sign Up</Lint>
        </nav>
    )
}

export default Nav