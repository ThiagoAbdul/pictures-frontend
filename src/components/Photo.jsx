import { useState } from 'react'
import './Photo.css'
import ModalPhoto from './ModalPhoto'

export default function Photo(){
    const [modal, setModal] = useState(false)
    const showModal = () => {
        setModal(true)
        // setTimeout(() => setModal(false), 1000)
    }
    return (
        <>
          <li className='Photo' onClick={showModal}></li>
          {modal && <ModalPhoto handleOnClick={() => setModal(false)}><Photo></Photo></ModalPhoto>}
        </>
    )
}