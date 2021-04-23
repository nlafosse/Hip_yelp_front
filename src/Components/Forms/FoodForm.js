import {useState} from 'react'


const FoodForm = () => {
    
    const [coords, setCoords] = useState({})

    const [name, setName] = useState("")
    const [group, setGroup] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")
    const [description, setDescription] = useState("")
    const [photoUrl, setPhotoUrl] = useState("")
    const [longitude, setLongitude] = useState("")
    const [latitude, setLatitude] = useState("")


    const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    
    const groups = ["Italian", "French", "Cuban", "Carribbean", "Mexican", "Ethiopian", "Gastropub", "Chinese", "American", "Japanese", "Korean", "Middle Eastern", "Mediterranean", "Indian", "Thai", "Vietnamese"]

    const getCoords = async () => { 
        let param = address.split(' ').join("%20")
        console.log(param);
        try {
          const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${param}.json?country=US&access_token=${process.env.REACT_APP_MAPBOX_KEY}`);
          const data = await res.json();
          const latitude = data.features[0].center[1]
          const longitude = data.features[0].center[0]
          console.log("latitude", latitude)
          console.log("longitude", longitude)
        } catch (err) {
          console.log(err);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitting')
        getCoords()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <select name="group" id="group" onChange={(e) => setGroup(e.target.value)}>
                    {groups.map((group, idx) => {
                        return <option value={group}>{group}</option>
                    })}
                </select>
                <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}></input>
                <select name="states" id="states" onChange={(e) => setState(e.target.value)}>
                    {states.map((state, idx) => {
                        return <option value={state}>{state}</option>
                    })}
                </select>
                <input type="zip" placeholder="Zip Code" value={zip} onChange={(e) => setZip(e.target.value)}></input>
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                <input type="text" placeholder="Photo Url" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default FoodForm

