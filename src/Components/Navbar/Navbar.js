import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link to="/" exact >Home</Link>
                <Link to="/Foods"> Foods </Link>
            </nav>
        </header>
    )
}

export default Navbar
