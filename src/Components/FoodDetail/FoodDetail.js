import React from "react";
import { Link } from 'react-router-dom'
import * as foodDetailStyle from './FoodDetail.module.css'


export default function FoodDetail ({routerProps, hotspot}) {


  const selected = [...hotspot].filter(
    (h) => h.id == routerProps.match.params.id
  );

  if (selected[0] === undefined) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div className={foodDetailStyle.foods}>
      <h1>{selected[0].name}</h1>
        <div className={foodDetailStyle.infoContainer}>
          <img src={selected[0].photo_url} alt="selected place" className={foodDetailStyle.foodPhoto} width="400px"/>
          <div className={foodDetailStyle.basicInfo}>
            <p>{selected[0].group}</p>
            <p>{selected[0].description}</p>
            <p>{selected[0].address}</p>
            <h4 className={foodDetailStyle.tagHeadline}>Tags:</h4>
            {selected[0].tags !== null ? (
            selected[0].tags.map((tag) =>{
              return <p className={foodDetailStyle.tags}>{tag}</p>
                    
            })) : (<p></p>)
          }
          </div>
        </div>
      <div className={foodDetailStyle.home}>
        <Link to="/Foods"><button type="button" className={foodDetailStyle.btn}>BACK</button></Link>
      </div>
    </div>
  )
}