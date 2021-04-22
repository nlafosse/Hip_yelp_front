import React from "react";
import { useState, useEffect } from "react";
import mockDataFoods from "../../mockDataFoods.json"
import Cards from "../Cards/Cards"
const Food = ({apiData, getApiData}) => {
  // const {match} = props;
  // const [params] = match;
  // const{foodId} = params;

  // const [foodData, setFoodData] = useState(mockDataFoods);

  // const getFoodData = async () => {
  //   try {
  //     const res = await fetch("https://hotspot1.herokuapp.com/foods/")
  //     const data = await res.json();
  //     setFoodData(data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  useEffect(() => {
    getApiData("foods")
  }, [])

  // console.log(foodData)

  return (
    <div className= "Foods">
      <img src={apiData.photo_url} className="food_url" width="150px"/>
      <p>{apiData.name}</p>
      <p>type: {apiData.group}</p>
      <p>address: {apiData.address}</p>
      <p>description: {apiData.description}</p>
      <Cards placeData={apiData} group={"Foods"}/>
    </div>
  )
}

export default Food;