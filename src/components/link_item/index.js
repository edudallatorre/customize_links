import './link_item.css'
import { Fix, FiClipboard, FiX } from 'react-icons/fi'

export default function LinkItem({ closeModal, content }) {
    return(
        <div className='modal-container'>

            <div className='modal-header'>
                <h1>Shortened Link</h1>
                <button onClick={closeModal}>
                    <FiX size={28} color="#000000"/>
                </button>
            </div>

            <span>
                {content.long_url}
            </span>
            
            <button className='modal-link'>
                {content.link}
                <FiClipboard size={20} color="#FFFFFF"/>
            </button>

        </div>
    )
}