import React from "react";
import { Link } from 'react-router-dom'


export default function FoodDetail ({routerProps, hotspot}) {
  console.log(routerProps)

  const selected = [...hotspot].filter(
    (h) => h.id == routerProps.match.params.id
  );

  console.log(selected)

  if (selected[0] === undefined) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div className="foods">
      <h1>{selected[0].name}</h1>
        <div className="info-container">
          <img src={selected[0].photo_url} alt="selected place" className="food_url" width="400px"/>
          <div className="basic-info">
            <p>Type: {selected[0].group}</p>
            <p>{selected[0].description}</p>
            <p>Address: {selected[0].address}</p>
          </div>
        </div>
      <div className="home-link">
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}