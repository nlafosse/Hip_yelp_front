import React from "react";
import { useState, useEffect } from "react";
import mockDataFoods from "../../mockDataFoods.json"
import Cards from "../Cards/Cards"
const Food = () => {
  // const {match} = props;
  // const [params] = match;
  // const{foodId} = params;

  const [foodData, setFoodData] = useState(mockDataFoods);

  const getFoodData = async () => {
    try {
      const res = await fetch("https://hotspot1.herokuapp.com/foods/")
      const data = await res.json();
      setFoodData(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getFoodData();
  }, [])

  // console.log(foodData)

  return (
    <div className= "Foods">
      <img src={foodData.photo_url} className="food_url" width="150px"/>
      <p>{foodData.name}</p>
      <p>type: {foodData.group}</p>
      <p>address: {foodData.address}</p>
      <p>description: {foodData.description}</p>
      <Cards placeData={foodData} group={"Foods"}/>
    </div>
  )
}

export default Food;