import React from "react";
import { useState, useEffect } from "react";
import Cards from "../Cards/Cards"

const Drink = ({apiData, getApiData}) => {

  useEffect(() => {
    getApiData("drinks")
  }, [])

  // console.log(foodData)

  return (
    <div className= "drinks">
      <img src={apiData.photo_url} className="drink_url" width="150px"/>
      <p>{apiData.name}</p>
      <p>type: {apiData.group}</p>
      <p>address: {apiData.address}</p>
      <p>description: {apiData.description}</p>
      <Cards placeData={apiData} group={"Drinks"}/>
    </div>
  )
}

export default Drink;