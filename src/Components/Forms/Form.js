import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'


const FoodForm = () => {
    
    // const [coords, setCoords] = useState({})

    const [category, setCategory] = useState('foods')
    const [name, setName] = useState("")
    const [group, setGroup] = useState("Italian")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("NY")
    const [zip, setZip] = useState("")
    const [description, setDescription] = useState("")
    const [photoUrl, setPhotoUrl] = useState("")
    const [longitude, setLongitude] = useState("")
    const [latitude, setLatitude] = useState("")
    const [newHotspot, setNewHotspot] = useState(null)

    // Declaring History to use for redirect after successful add
    const history = useHistory();
    // For the list in the drop down
    const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Washington DC", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    // The geocoder api uses the state abbreviations. So this is here to insert the correct state code for the state that is selected
    const stateAbr = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
    const groups = ["Italian", "French", "Cuban", "Carribbean", "Mexican", "Ethiopian", "Gastropub", "Chinese", "American", "Japanese", "Korean", "Middle Eastern", "Mediterranean", "Indian", "Thai", "Vietnamese"]


    const addData = async () => {
        try{
            const res = await fetch(`https://hotspot1.herokuapp.com/${category}/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newHotspot)
                }
            );
            console.log(res)
            // Having issues catching error so I added some logic to ensure that the page does not change if there is a server error
            if(res.status != 201) {
                return console.log("Sorry, error. Code:", res.status)
            }
            const data = await res.json();
            console.log(data)
            history.push('/Success');

        } catch (err) {
            console.log(err);
            // Why is this not throwing an error??
        }
    }


    const getCoords = async () => { 
        let param = address.split(' ').join("+")
        let cityParam = city.split(' ').join("+")
        
        try {
          const res = await fetch(`https://api.geocod.io/v1.6/geocode?street=${param}&city=${cityParam}&state=${state}&postal_code=${zip}&api_key=${process.env.REACT_APP_GEOCODER_KEY}&limit=1`);
          const data = await res.json();
          const latit = data.results[0].location.lat
          const long = data.results[0].location.lng 
          setLongitude(long)
          setLatitude(latit)
        } catch (err) {
          console.log(err);
        }
    }

    const makeNewHotspot = () => {
        setNewHotspot({
            name: name,
            group: group,
            address: `${address} ${city} ${state} ${zip}`,
            description: description,
            photo_url: photoUrl,
            lon: longitude.toString(),
            lat: latitude.toString(),
        })
    }

    

    const handleSubmit = (event) => {
        event.preventDefault();
        getCoords()
    }

    useEffect(() => {
        if(newHotspot === null) {
            return null
        } else {
            addData()
        }
    }, [newHotspot])

    useEffect(() => {
        if(latitude === "") {
            return null
        } else {
            console.log(longitude, latitude)
            makeNewHotspot()
        }
    }, [latitude])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                    <option value="foods">Food</option>
                    <option value="drinks">Drink</option>
                </select>
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
                        return <option value={stateAbr[idx]}>{state}</option>
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

