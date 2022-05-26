import ReactMapGl from 'react-map-gl';
import { useState, useEffect } from 'react';
import Markers from './Markers';
import LocationPopup from './LocationPopup';
import * as mapStyles from './Map.module.css';



const Map = ({ apiData, getApiData, currentCategory }) => {

  // const [category, updateCategory] = useState("foods");

  const [viewport, setViewPort] = useState({
    latitude: 40.7128,
    longitude: -74.0060,
    width: "inherit",
    height: "90vh",
    zoom: 10
  })

  useEffect(() => {
    console.log(currentCategory);
    if (currentCategory === "") {
      getApiData("foods");
    } else {
      getApiData(currentCategory);
    }
  }, [])

  const categoryHandler = () => {
    if (currentCategory === "foods") {
      getApiData("drinks");
    } else {
      getApiData("foods");
    }
  }

  const [selected, setSelected] = useState(null);



  return (
    <div data-testid={"mapbox-container"}>
      <button type="button" className={mapStyles.choice} onClick={(() => {
        categoryHandler();
      })}>{currentCategory}</button >
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
        onViewportChange={newViewport => setViewPort(newViewport)} container={<div data-testid={"mapbox-container"}></div>} id={"map-box"}>
        <Markers apiData={apiData} getApiData={getApiData} setSelected={setSelected}></Markers>
        <LocationPopup selected={selected} setSelected={setSelected} currentCategory={currentCategory}></LocationPopup>
      </ReactMapGl>
    </div>
  )
}

export default Map
