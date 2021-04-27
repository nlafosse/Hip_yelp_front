import{Link} from 'react-router-dom'
import "./FooterStyles.css"


const Footer = () => {
    return (
    <footer className="footerMain" >
        <nav className='footerNav'>
        <Link className={"FooterItem"} to="/" exact >Home</Link>
        <Link className={"FooterItem"} to="/about">About</Link>
        </nav>
    </footer>
    )
}

export default Footer