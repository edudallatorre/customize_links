import './links.css'
import { FiArrowLeft, FiLink, FiTrash, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom' 

export default function Links() {
    return (
      <div className="links-container">

        <div className='links-header'>
          <Link to="/">
          <FiArrowLeft size={38} color="#ffffff" />
          </Link>
          <h1>My Links</h1>
        </div>

        <div className='links-item'>
          <button className='link'>
            <FiLink size={18} color="#ffffff" />
            https://eduardodallatorre.com
          </button>
          <button className='link-delete'>
            <FiTrash size={24} color="#FF5454" />
          </button>
        </div>

        <div className='links-item'>
          <button className='link'>
            <FiLink size={18} color="#ffffff" />
            https://eduardodallatorre.com
          </button>
          <button className='link-delete'>
            <FiTrash size={24} color="#FF5454" />
          </button>
        </div>
      
      </div>
    )
  }