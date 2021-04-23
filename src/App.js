import './App.css';
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import Home from './Components/Home/Home'
import Foods from './Components/Foods/Foods'
import { useState} from 'react'
import Navbar from './Components/Navbar/Navbar'

import FoodDetail from './Components/FoodDetail/FoodDetail';
import Drinks from './Components/Drinks/Drinks'
import DrinkDetail from './Components/DrinkDetail/DrinkDetail'

// Save the Component, key and path in an array of objects for each Route
// You could write all routes by hand but I'm lazy annd this lets me use
// the map method to just loop over them and make my routes
// SWITCH is used so that it only ever matches one route at a time
// If you don't want to use react router just rewrite the app component to not use it



const routes = [
  {
    Component: Home,
    key: 'Home',
    path: '/',
    
    Component: Foods,
    key: 'Foods',
    path: '/Foods'
  }
]

export default function App () {
  const [apiData, setApiData] = useState([]);

  const apiEndpoint = {
    endpointfoods: "foods",
    endpointdrinkS: "drinks"
  };

  const getApiData = async (param) => { 
    try {
      const res = await fetch(`https://hotspot1.herokuapp.com/${param}/`);
      const data = await res.json();
      setApiData(data)
      console.log("work", res, apiData)
    } catch (err) {
      console.log(err);
    }
  }
  // We dont need to pull the data on page load
  // useEffect(() => {
  //   getApiData();
  // }, []);

  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" render={()=> <Home />} />
        <Route exact path="/Foods" render={()=> <Foods apiData={apiData} getApiData={getApiData}/> } />
        <Route 
          path="/Foods/:id"
          render={(routerProps) => <FoodDetail hotspot={apiData} routerProps={routerProps}/>}
        />
        <Route exact path="/Drinks" render={()=> <Drinks apiData={apiData} getApiData={getApiData}/> } />
        <Route 
          path="/Drinks/:id"
          render={(routerProps) => <DrinkDetail hotspot={apiData} routerProps={routerProps}/>}
        />
      </Switch>
    </Router>
  )
}