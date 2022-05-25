import { Marker } from 'react-map-gl';
import * as markerStyles from './Marker.module.css';
import markerImg from '../../Images/markerImg.png';

const Markers = ({ apiData, setSelected }) => {


  if (apiData.length < 1) {
    return <h1>Loading</h1>
  }



  return (
    <div data-testid={"marker-container"}>
      {apiData.map((location) => {
        return (
          <Marker key={location.lat} latitude={parseFloat(location.lat)} longitude={parseFloat(location.lon)} offsetLeft={-10} offsetTop={-15} >
            <div>
              <button className={markerStyles.markerButton} onClick={(e) => {
                e.preventDefault()
                setSelected(location)
              }}>
                <img className={markerStyles.markerImg} src={markerImg} alt="search marker" />
              </button>
            </div>
          </Marker>
        )
      })}

    </div>
  )
}

export default Markers
