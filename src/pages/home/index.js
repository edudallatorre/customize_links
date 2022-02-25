import { useState } from 'react'
import { FiLink } from 'react-icons/fi'
import './home.css'

import '../../components/menu'
import '../../components/link_item'
import Menu from '../../components/menu'
import LinkItem from '../../components/link_item'

export default function Home() {
  const [link, setLink] = useState('')

  function handleShortLink() {
    alert("My Link" + link)
  }

    return (
      <div className="container-home">
    
        <div className="logo"> 
            <img src="/logo.png" alt="Customize links logo"/>
            <h1>CustomizeLinks</h1>
            <span>Paste your link to shorten! 👇</span>
        </div>


        <div className="area-input">
            <div>
                <FiLink size={24} color="#ffffff"/>
                <input
                    placeholder='Paste your link here...'
                    value={link}
                    onChange={ (e) => setLink(e.target.value)}
                />
            </div>

            <button onClick={handleShortLink}>Shorten Link</button>
        </div>
        
        <Menu/>

        <LinkItem/>

      </div>
      
    )
  }