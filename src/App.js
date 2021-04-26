import './App.css';
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import Home from './Components/Home/Home'
import Foods from './Components/Foods/Foods'
import * as ReactBootStrap from "react-bootstrap";
import { useState, useEffect, Component } from 'react'
import { useState} from 'react'
import Navbar from './Components/Navbar/Navbar'

import FoodDetail from './Components/FoodDetail/FoodDetail'
import Map from './Components/Map/Map';
import Form from './Components/Forms/Form';
import Drinks from './Components/Drinks/Drinks'
import DrinkDetail from './Components/DrinkDetail/DrinkDetail'
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Team from './Components/Team/Team';
import Story from './Components/Story/Story';
import Newsletter from './Components/Newsletter/Newsletter';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact'


import SuccessfulAdd from './Components/SuccessfulAdd/SuccessfulAdd';
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
    
    Component: About,
    key: 'About',
    path: '/About',

    Component: Foods,
    key: 'Foods',
    path: '/Foods'
  }
]

export default function App () {
  const [apiData, setApiData] = useState([]);
  // I added this to keep track of whether the current search was food or drinks. This needed to be passed to the map for the location popups to link properly
  const [currentCategory, setCurrentCategory] = useState("")

  const apiEndpoint = {
    endpointfoods: "foods",
    endpointdrinkS: "drinks"
  };

  const getApiData = async (param) => { 
    setCurrentCategory(param)
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
    <div>
        <Navbar></Navbar>
        <Switch >
          <Route exact path="/About" render={()=> <About />} />
          <Route exact path="/Team" render={()=> <Team />} />
          <Route exact path="/Story" render={()=> <Story />} />
          <Route exact path="/Testimonials" render={()=> <Testimonials />} />
          <Route exact path="/Newsletter" render={()=> <Newsletter />} />
          <Route exact path="/Foods" render={()=> <Foods apiData={apiData} getApiData={getApiData}/> } />
          <Route 
            path="/Foods/:id"
            render={(routerProps) => <FoodDetail hotspot={apiData} routerProps={routerProps}/>}
            />
        <Route exact path="/" render={()=> <Home />} />
        <Route exact path="/Foods" render={()=> <Foods apiData={apiData} getApiData={getApiData}/> } />
        <Route 
          path="/Foods/:id"
          render={(routerProps) => <FoodDetail hotspot={apiData} routerProps={routerProps}/>}
        />

 
        <Route exact path="/map" render={() => <Map apiData={apiData} getApiData={getApiData} currentCategory={currentCategory}/>} />
        <Route exact path="/Add" render={() => <Form />} />
 
        <Route exact path="/Drinks" render={()=> <Drinks apiData={apiData} getApiData={getApiData}/> } />
        <Route 
          path="/Drinks/:id"
          render={(routerProps) => <DrinkDetail hotspot={apiData} routerProps={routerProps}/>}
        />
       
        <Route exact path="/Success" render={() => <SuccessfulAdd />} />
      </Switch>
    
    <Footer />
  </div>
  )
}