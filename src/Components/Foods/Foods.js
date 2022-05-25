import React from "react";
import { useEffect } from "react";

import Cards from "../Cards/Cards"
const Food = ({ apiData, getApiData }) => {


  useEffect(() => {
    getApiData("foods")
  }, [apiData])



  return (
    <div className="Foods" data-testid={"food-card-container"}>
      <Cards placeData={apiData} group={"Foods"} />
    </div>
  )
}

export default Food;