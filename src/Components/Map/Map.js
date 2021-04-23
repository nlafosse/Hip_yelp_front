import ReactMapGl from 'react-map-gl';
import { useState } from 'react';

const Map = () => {

const [viewport, setViewPort] = useState({
    latitude: 40.7128,
    longitude: -74.0060,
    zoom: 10
})

    return (
        <ReactMapGl 
        {...viewport}
        height="90vh"
        width="100vw" 
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY} 
        onViewportChange={newViewport => setViewPort(newViewport)}>

        </ReactMapGl>
    )
}

export default Map
