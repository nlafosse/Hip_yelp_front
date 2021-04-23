import React from "react";
import { useEffect } from "react";
import Cards from "../Cards/Cards"

const Drink = ({apiData, getApiData}) => {

  useEffect(() => {
    getApiData("drinks")
  }, [])



  return (
    <div className= "drinks">
     
      <Cards placeData={apiData} group={"Drinks"}/>
    </div>
  )
}

export default Drink;