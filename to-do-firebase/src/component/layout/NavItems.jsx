import { Link } from "react-router-dom"

const NavItems = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light d-flex justify-content-center">
                <Link to="/" className="navbar-brand">
                    Sign Out
                </Link>
                <Link to="/SignUp" className="navbar-brand">
                    Sign Up
                </Link>
                <Link to="/SignIn" className="navbar-brand">
                    Sign In
                </Link>
            </nav>   
        </>
    )
}
export default NavItems