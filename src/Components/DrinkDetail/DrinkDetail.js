import React from "react";
import { Link } from 'react-router-dom'

export default function DrinkDetail ({routerProps, hotspot}) {
  console.log(routerProps)

  const selected = [...hotspot].filter(
    (h) => h.id == routerProps.match.params.id
  );

  console.log(selected)

  return (
    <div>
      <img src={selected[0].photo_url} className="drink_url" width="500px"/>
      <h1>{selected[0].name}</h1>
      <p>{selected[0].description}</p>
      <p>Type: {selected[0].group}</p>
      <p>Address: {selected[0].address}</p>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}