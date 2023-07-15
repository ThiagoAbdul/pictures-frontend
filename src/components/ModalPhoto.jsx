import { useState } from 'react'
import './ModalPhoto.css'
import { BiCheck, BiX } from 'react-icons/bi'

const apiUrl = `${import.meta.env.VITE_API_URL}/api/photos`

export default function ModalPhoto({file, onClose}){
    const reader = new FileReader()
    const [imageUrl, setImageUrl] = useState()
    reader.onload = () => setImageUrl(reader.result)
    reader.readAsDataURL(file)
    
    const backgroundImageStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    } 

    const postPhoto = () => {
        const formData = new FormData() 
        formData.append('file', file)
        fetch(apiUrl, {
            method: 'POST',
            mode: 'cors',
            body: formData
        })
            .then(onClose)
            .catch(console.log)
    } 

    return (
        <section className='ModalPhoto'>
            <div className='imageContainer'>
                <div className='image' style={backgroundImageStyle}>
                    <div className='cancel'>
                        <button onClick={() => onClose()}>
                            <BiX className='icon'/>
                        </button>
                    </div>
                    <div className='send'>
                        <button onClick={postPhoto}>
                            <BiCheck className='icon'/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}