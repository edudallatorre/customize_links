import './menu.css'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='menu'>
            <a className='social' href='https://www.linkedin.com/in/eduardodallatorre/'><BsLinkedin color="#ffffff" size={24}/>
            </a>
            <a className='social' href='https://instagram.com/eduardodallatorre'><BsInstagram color="#ffffff" size={24}/>
            </a>
            <Link className="menu-item" to="/links">
                My Links
            </Link>
        </div>
    )
}