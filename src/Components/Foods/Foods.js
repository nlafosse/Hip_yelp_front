import React from "react";
import {  useEffect } from "react";

import Cards from "../Cards/Cards"
const Food = ({apiData, getApiData}) => {


  useEffect(() => {
    
    getApiData("foods")
  }, [])



  return (
    <div className= "Foods">
    
      <Cards placeData={apiData} group={"Foods"}/>
    </div>
  )
}

export default Food;