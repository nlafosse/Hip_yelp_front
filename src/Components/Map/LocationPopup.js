import {Popup} from 'react-map-gl';
import {Link} from 'react-router-dom';
import * as popupStyles from './LocationPopup.module.css';

const LocationPopup = ({ selected, setSelected, currentCategory }) => {
    if(selected === null){
        return null
    }
    return (
        <div>
            <Popup latitude={parseFloat(selected.lat)} longitude={parseFloat(selected.lon)} closeOnClick={false} onClose={() => {
                setSelected(null)
            }} >
                <h2 className={popupStyles.name}>{selected.name}</h2>
                <div className={popupStyles.imgContainer}>
                    <img className={popupStyles.img} src={selected.photo_url} alt="selected place" />
                </div>
                <div className={popupStyles.linkContainer}>
                    <i className={`${popupStyles.itag} fas fa-arrow-right`} ></i>
                    <Link className={popupStyles.detailLink} to={`/${currentCategory}/${selected.id}`}>See Details</Link>
                    <i className={`${popupStyles.itag} fas fa-arrow-left`}></i>
                </div>
            </Popup>
        </div>
    )
}

export default LocationPopup

