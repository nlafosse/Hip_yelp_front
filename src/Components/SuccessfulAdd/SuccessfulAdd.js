import {Link} from 'react-router-dom';

const SuccessfulAdd = () => {
    return (
        <div>
            <h1>Success!</h1>
            <p>You Entry has been successfully added. Thank you for contributing!</p>
            <Link to="/" exact >Home</Link>
        </div>
    )
}

export default SuccessfulAdd
