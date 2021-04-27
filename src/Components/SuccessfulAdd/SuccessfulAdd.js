import {Link} from 'react-router-dom';
import * as addStyles from './SuccessfulAdd.module.css';

const SuccessfulAdd = () => {
    return (
        <div className={addStyles.successContainer}>
            <h1 className={addStyles.title}>Success!</h1>
            <p>You Entry has been successfully added. Thank you for contributing!</p>
            <Link className={addStyles.homeBtn} to="/Add" exact >Add Another</Link>
            <Link className={addStyles.homeBtn} to="/" exact >Home</Link>
        </div>
    )
}

export default SuccessfulAdd
