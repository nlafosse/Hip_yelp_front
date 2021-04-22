import './App.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Components/Home/Home'
import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
// Save the Component, key and path in an array of objects for each Route
// You could write all routes by hand but I'm lazy annd this lets me use
// the map method to just loop over them and make my routes
// SWITCH is used so that it only ever matches one route at a time
// If you don't want to use react router just rewrite the app component to not use it




export default function App () {
  const [apiData, setApiData] = useState([]);

  const apiEndpoint = {
    endpointfoods: "foods",
    endpointdrinkS: "drinks"
  };

  const getApiDate = async () => { 
    try {
      const res = await fetch(`https://hotspot1.herokuapp.com/${apiEndpoint.endpointfoods}/`);
      const data = await res.json();
      setApiData(data)
      console.log("work", res, apiData)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getApiDate();
  }, []);




  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" render={()=> <Home />} />
      </Switch>
    </Router>
  )
}
