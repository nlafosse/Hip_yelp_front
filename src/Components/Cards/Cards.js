import { Link } from 'react-router-dom';
import './Cards.css';

export default function Cards({ placeData, group }) {

  return placeData ? (
    <div className="cards" data-testid={"cards"}>
      {placeData.map((place, i) => {
        return (
          <div key={i + place.group} data-testid={"card"}>
            <Link className="card" to={`/${group}/${place.id}`}>
              <img className="card_img" src={place.photo_url} alt={place.name} onError={(event) => {
                event.target.src = `https://loremflickr.com/320/240/${place.group}`
              }} />
              <h2 className="cards_text">{place.name}</h2>
            </Link>
          </div>
        )
      })}
    </div>
  ) : <></>
}