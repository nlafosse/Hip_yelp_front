import {Link} from 'react-router-dom';
import * as navStyles from './Navbar.module.css';

const Navbar = () => {
    return (
        <header className={navStyles.navbarHeader}>
            <nav className={navStyles.navbarNav}>
                <Link className={navStyles.navItem} to="/" exact >Home</Link>
                <Link className={navStyles.navItem} to="/Foods"> Food </Link>
                <Link className={navStyles.navItem} to="/Drinks"> Drinks </Link>
                <Link className={navStyles.navItem} to="/About" exact > About Us </Link>
                <Link className={navStyles.navItem} to="/Contact" exact > Contact Us</Link>
            </nav>
        </header>
    )
}

export default Navbar
