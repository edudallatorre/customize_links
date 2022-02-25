import './link_item.css'
import { Fix, FiClipboard, FiX } from 'react-icons/fi'

export default function LinkItem() {
    return(
        <div className='modal-container'>


            <div className='modal-header'>
                <h1>Link item</h1>
                <button>
                    <FiX size={28} color="#000000"/>
                </button>
            </div>

            <span>
                https://eduardodallatorre.com
            </span>
            
            <button className='modal-link'>
                https:/bit.ly/12900
                <fiClipboard size={20} color="#FFFFFF"/>
            </button>

        </div>
    )
}