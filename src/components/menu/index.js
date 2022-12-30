import './menu.css'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='menu'>
            <Link className="menu-item" to="/links">
                My Links
            </Link>
        </div>
    )
}