import ReactMapGl from 'react-map-gl';
import { useState, useEffect } from 'react';
import Markers from './Markers';
import LocationPopup from './LocationPopup';



const Map = ({ apiData, getApiData }) => {

const [viewport, setViewPort] = useState({
    latitude: 40.7128,
    longitude: -74.0060,
    width: "100vw",
    height: "90vh",
    zoom: 10
})

const [selected, setSelected] = useState(null);



console.log('in map', apiData)
    return (
        <ReactMapGl 
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY} 
        onViewportChange={newViewport => setViewPort(newViewport)}>
        <Markers apiData={apiData} getApiData={getApiData} setSelected={setSelected}></Markers>
        <LocationPopup selected={selected} setSelected={setSelected}></LocationPopup>
        </ReactMapGl>
    )
}

export default Map
