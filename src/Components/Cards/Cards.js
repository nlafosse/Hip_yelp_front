import { Link } from 'react-router-dom'


export default function Cards ({placeData}) {
    // if image_url is null us place holder image

    {placeData.map((place,i)=> {
        return(
                <div key={i}>
                <Link to={`/foods/${place.id}`}>
                <img src={place.photo_url} alt={"image"}  onError={(event) => {
                    event.target.src = '' }} />
                    <h2>{place.name}</h2>         
                </Link>
                </div>
            )
    })}
}