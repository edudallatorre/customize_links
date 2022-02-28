import { useState, useEffect } from 'react'
import './links.css'
import { FiArrowLeft, FiLink, FiTrash, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom' 

import { getLinksSave, deleteLink } from '../../services/store_links'
import LinkItem from '../../components/link_item'

export default function Links() {

  const [myLinks, setMyLinks] = useState([])

  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave('@shortenLink')

      if (result.length === 0) {
        console.log("Empty list")
      }

      setMyLinks(result)
    }

    getLinks();

  }, [])

  function handleOpenLink(Link) {
    setData(Link)
    setShowModal(true)
  }

  async function handleDeleteLink(id) {
    const result = await deleteLink(myLinks, id)

    if (result.length === 0) {
      console.log("You don't have links!")
    }

    setMyLinks(result)
  }

    return (
      <div className="links-container">

        <div className='links-header'>
          <Link to="/">
          <FiArrowLeft size={38} color="#ffffff" />
          </Link>
          <h1>My Links</h1>
        </div>

        {myLinks.map( Link =>(
                  <div key={Link.id} className='links-item'>
                  <button className='link' onClick={() => handleOpenLink(Link)}>
                    <FiLink size={18} color="#ffffff" />
                    {Link.long_url}
                  </button>
                  <button className='link-delete' onClick={() => handleDeleteLink(Link.id)}>
                    <FiTrash size={24} color="#FF5454" />
                  </button>
                </div>
        ))}

        {showModal && (
          <LinkItem
            closeModal={() => setShowModal(false)}
            content={data}
          />
        )}
      
      </div>
    )
  }