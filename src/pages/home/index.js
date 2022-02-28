import { useState } from 'react'
import { FiLink } from 'react-icons/fi'
import './home.css'

import Menu from '../../components/menu'
import LinkItem from '../../components/link_item'

import api from '../../services/api'
import { saveLink } from '../../services/store_links'


export default function Home() {
  const [link, setLink] = useState('')
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  async function handleShortLink() {
    try {
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data)
      setShowModal(true)

      saveLink('@shortenLink', response.data)

      setLink('')
    } catch {
      alert("Oops looks like something went wrong!")
      setLink('')
    }
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

        { showModal && (
          <LinkItem
            closeModal={ () => setShowModal(false)}
            content={data}
          />
        )}

      </div>
      
    )
  }