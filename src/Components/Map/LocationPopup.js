import {Popup} from 'react-map-gl';

const LocationPopup = ({ selected, setSelected }) => {
    if(selected === null){
        return null
    }
    return (
        <div>
            <Popup latitude={parseFloat(selected.lat)} longitude={parseFloat(selected.lon)} onClose={() => {
                setSelected(null)
            }} >
                <h2>{selected.name}</h2>
            </Popup>
        </div>
    )
}

export default LocationPopup

