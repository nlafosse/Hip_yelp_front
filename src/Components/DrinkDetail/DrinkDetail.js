import React from "react";
import { Link } from 'react-router-dom'
import * as drinkDetailStyle from './DrinkDetail.module.css'

export default function DrinkDetail({ routerProps, hotspot }) {


  const selected = [...hotspot].filter(
    (h) => h.id == routerProps.match.params.id
  );



  if (selected[0] === undefined) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div className={drinkDetailStyle.drinks}>
      <h1>{selected[0].name}</h1>
      <div className={drinkDetailStyle.infoContainer}>
        <img src={selected[0].photo_url} className={drinkDetailStyle.drinkPhoto} width="400px" />
        <div className={drinkDetailStyle.basicInfo}>
          <p>{selected[0].group}</p>
          <p>{selected[0].description}</p>
          <p>{selected[0].address}</p>
          <h4 className={drinkDetailStyle.tagHeadline}>Tags:</h4>
          {selected[0].tags !== null ? (
            selected[0].tags.map((tag) => {
              return <p className={drinkDetailStyle.tags}>{tag}</p>

            })) : (<p></p>)
          }
        </div>
        {/* <div className={drinkDetailStyle.tagBox}>
          {selected[0].tags.map((tag) => {
              return <span className={drinkDetailStyle.tags}>{tag}</span>
            })}
          </div> */}
      </div>
      <div className={drinkDetailStyle.home}>
        <Link to="/Drinks"><button type="button" className={drinkDetailStyle.btn}>BACK</button></Link>
      </div>
    </div>
  )
}

