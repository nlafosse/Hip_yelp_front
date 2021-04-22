import {Link} from 'react-router-dom'
import placeholder from '../../Images/placeholder.png'
import * as homeStyles from './Home.module.css'

const Home = () => {
    return (
        <div className={homeStyles.body}>
            <h1 className={homeStyles.title}>Test Title</h1>
            <div className={homeStyles.container}>
                <div>
                    <Link className={homeStyles.link} to="/Foods">
                        <h2>Food</h2>
                        <div className={homeStyles.imgContainer}>
                            <img className={homeStyles.homeImg} src={placeholder} />
                        </div>
                    </Link>
                </div>
                <div>
                    <Link className={homeStyles.link} to="/Drinks">
                        <h2>Drinks</h2>
                        <div className={homeStyles.imgContainer}>
                            <img className={homeStyles.homeImg} src={placeholder} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        
    )
}

export default Home
