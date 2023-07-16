import { useState } from 'react'
import './Photo.css'
import ModalPhoto from './ModalPhoto'

export default function Photo({ src }){
    const [modal, setModal] = useState(false)
    const showModal = () => {
        setModal(true)
    }

    const backgroundImageStyle = {
        backgroundImage: `url(${src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    } 

    return (
        <>
          <li className='Photo' style={backgroundImageStyle}>
          </li>
          {modal && <ModalPhoto/>}
        </>
    )
}