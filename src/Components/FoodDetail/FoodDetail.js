import React from "react";
import { Link } from 'react-router-dom'

export default function FoodDetail ({ hotspot }) {
  console.log(hotspot)
  if (hotspot === undefined) {
    return <h1>Loading...</h1>
  }


  return (
    <div>
      <h1>test</h1>
      <h1>{hotspot.name}</h1>
      {/* <img src={getHotSpot.photo_url} className="food_url" width="150px"/>
      <h1>{getHotSpot.name}</h1>
      <p>{getHotSpot.description}</p>
      <p>Type: {getHotSpot.group}</p>
      <p>Address: {getHotSpot.address}</p>
      <div>
        <Link to="/">Home</Link>
      </div> */}
    </div>
  )
}

// const Food = (props) => {
//   const {match} = props;
//   const [params] = match;
//   const {foodId} = params;

//   const [foodData, setFoodData] = useState(mockDataFoods)

//   const getFoodData = async () => {
//     try {
//       const res = await fetch("https://hotspot1.herokuapp.com/foods/" + foodId)
//       const data = await res.json();
//       setFoodData(data)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   useEffect(() => {
//     getFoodData();
//   }, [])

//   // console.log(foodData)

//   return (
//     <div className= "Foods">
//       <img src={foodData.photo_url} className="food_url" width="150px"/>
//       <p>{foodData.name}</p>
//       <p>type: {foodData.group}</p>
//       <p>address: {foodData.address}</p>
//       <p>description: {foodData.description}</p>
//     </div>
//   )
// }

// export default Food;