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
     
      <Cards placeData={apiData} group={"Drinks"}/>
    </div>
  )
}

export default Drink;