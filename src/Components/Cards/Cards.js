import { Link } from 'react-router-dom';
// import './Cards.css';

export default function Cards ({ placeData , group }) {
    // if image_url is null us place holder image
    return(
        <div className="cards">
    {placeData.map((place,i)=> {
        return(
                <div key={i}>
                <Link to={`/${group}/${place.id}`}>
                <img  src={place.photo_url} alt={"image"}  onError={(event) => {
                    event.target.src = '' }} />
                    <h2 className="cards_text">{place.name}</h2>         
                </Link>
                </div>
            )
    })}
    </div>
    )
}