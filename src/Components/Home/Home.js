import {Link} from 'react-router-dom'
import placeholder from '../../Images/placeholder.png'
import * as homeStyles from './Home.module.css'

const Home = () => {
    return (
        <div>
            <h1 className={homeStyles.title}>Test Title</h1>
            <div className={homeStyles.container}>
                <div>
                    <Link to="">
                        <h2>Food</h2>
                        <div className={homeStyles.imgContainer}>
                            <img src={placeholder} />
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="">
                        <h2>Drinks</h2>
                        <div className={homeStyles.imgContainer}>
                            <img src={placeholder} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        
    )
}

export default Home
