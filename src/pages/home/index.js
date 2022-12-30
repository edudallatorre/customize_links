import { useState } from 'react'
import { FiLink } from 'react-icons/fi'
import './home.css'

import Menu from '../../components/menu'
import LinkItem from '../../components/link_item'

import api from '../../services/api'
import { saveLink } from '../../services/store_links'

import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'

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
            <h1>ShortLink</h1>
            <span>Paste your link to shorten! 👇</span>
        </div>


        <div className="area-input">
            <div>
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

      <footer>
        <div>
          <p>FOLLOW MY JOURNEY</p>
        </div>

        <div class="social">
          <a className='social' href='https://www.linkedin.com/in/eduardodallatorre/'><BsLinkedin color="#151a1e" size={18}/></a>
          <a className='social' href='https://github.com/eduardodallatorre'><BsGithub color="#151a1e" size={18}/></a>
          <a className='social' href='https://instagram.com/dallatorre.dev/'><BsInstagram color="#151a1e" size={18}/></a>
        </div>

        <div class="journey">
          <p>© 2022 | Made with ❤️ by <a id="link" href="https://eduardo.dallatorre.dev"> Eduardo Dalla Torre</a></p>
        </div>
      </footer>

      </div>
      
    )
  }