import { Link } from 'react-router-dom'

import * as homeStyles from './Home.module.css'

const Home = () => {
  return (
    <div className={homeStyles.body}>
      <h1 className={homeStyles.title}>Travlr</h1>
      <div className={homeStyles.container}>
        <div>
          <Link className={homeStyles.link} data-testid={"food-route"} to="/Foods">
            <h2 className={homeStyles.group}>Food</h2>
            <div className={homeStyles.imgContainer}>
              <img className={homeStyles.homeImg} src={"https://assets3.thrillist.com/v1/image/1880039/2880x3000/scale;jpeg_quality=60;progressive.jpg"} alt="example food option" />
            </div>
          </Link>
        </div>
        <div>
          <Link className={homeStyles.link} data-testid={"drink-route"} to="/Drinks">
            <h2 className={homeStyles.group}>Drinks</h2>
            <div className={homeStyles.imgContainer}>
              <img className={homeStyles.homeImg} src={"https://noseychef.com/wp-content/uploads/2018/12/IMG_4280123.jpg"} alt="example drink option" />
            </div>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Home

