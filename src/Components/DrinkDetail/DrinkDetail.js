import React from "react";
import { Link } from 'react-router-dom'
import * as drinkDetailStyle from './DrinkDetail.module.css'

export default function DrinkDetail ({routerProps, hotspot}) {
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
    <div className={drinkDetailStyle.drinks}>
      <h1>{selected[0].name}</h1>
        <div className={drinkDetailStyle.infoContainer}>
          <img src={selected[0].photo_url} className={drinkDetailStyle.drinkUrl} width="400px"/>
          <div className={drinkDetailStyle.basicInfo}>
            <p>Type: {selected[0].group}</p>
            <p>Description: {selected[0].description}</p>
            <p>Address: {selected[0].address}</p>
          </div>
        </div>
      <div className={drinkDetailStyle.homeLink}>
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

