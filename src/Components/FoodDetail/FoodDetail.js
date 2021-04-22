import React from "react";
import { Link } from 'react-router-dom'

export default function FoodDetail ({ hotspot }) {
  console.log(hotspot)
  if (hotspot === undefined) {
    return <h1>Loading...</h1>
  }


  return (
    <div>
      <h1>test</h1>
      <h1>{hotspot.name}</h1>
      {/* <img src={getHotSpot.photo_url} className="food_url" width="150px"/>
      <h1>{getHotSpot.name}</h1>
      <p>{getHotSpot.description}</p>
      <p>Type: {getHotSpot.group}</p>
      <p>Address: {getHotSpot.address}</p>
      <div>
        <Link to="/">Home</Link>
      </div> */}
    </div>
  )
}