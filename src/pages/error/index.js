import { Link } from 'react-router-dom'
import './error.css'

export default function Error() {
    return(
        <div className='container-error'>
            <img src="not_found.png" alt="Page not found"/>
            <h1>Page not Found!</h1>
            <Link to="/">
                Go back home
            </Link>
        </div>
    )
}