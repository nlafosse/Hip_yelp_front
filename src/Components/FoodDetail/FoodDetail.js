import React from "react";
import { Link } from 'react-router-dom'

export default function FoodDetail ({routerProps}) {
  console.log(routerProps)
  // if ( === undefined) {
  //   return <h1>Loading...</h1>
  // }

  const selected = [...routerProps].filter(
    (h) => h.id === routerProps.match.params.id
  );

  console.log(selected)

  return (
    <div>
      <h1>test</h1>
      <h1>{selected[0].name}</h1>
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