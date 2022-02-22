import { FiLink } from 'react-icons/fi';
import './home.css';

export default function Home() {
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
                />
            </div>

            <button>Shorten Link</button>
        </div>

      </div>
    )
  }