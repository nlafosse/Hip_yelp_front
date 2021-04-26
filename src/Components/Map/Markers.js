import {Marker} from 'react-map-gl';
import {useEffect, useState} from 'react';
import * as markerStyles from './Marker.module.css';
import markerImg from '../../Images/markerImg.png';

const Markers = ({ apiData, getApiData, setSelected }) => {
    console.log('markers', apiData)
    
    const [test, setTest] = useState('')

    useEffect(() => {
        console.log('update!')
    }, apiData)

    if(apiData.length < 1) {
        return <h1>Loading</h1>
    }

    

    return (
        <div>
            {apiData.map((location) => {
                return (
                    <Marker latitude={parseFloat(location.lat)} longitude={parseFloat(location.lon)} offsetLeft={-10} offsetTop={-15} >
                        <div>
                            <button className={markerStyles.markerButton} onClick={(e) => {
                                e.preventDefault()
                                setSelected(location)
                            }}>
                            <img className={markerStyles.markerImg} src={markerImg} alt="search marker" />
                            </button>
                        </div>
                    </Marker>
                )
            })}
            
        </div>
    )
}

export default Markers
