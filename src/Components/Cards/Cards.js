import { Link } from 'react-router-dom'


export default function Cards () {
    // if image_url is null us place holder image

    return(
        <div class>
           <Link>
           <img src={image_url} alt={"image"}  onError={(event) => {
            event.target.src = '' }} />         
           </Link>
        </div>
    )
}