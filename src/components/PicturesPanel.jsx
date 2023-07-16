import './PicturesPanel.css'
import InputPhoto from './InputPhoto';
import Photo from './Photo';
import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const apiUrl = `${import.meta.env.VITE_API_URL}/api/photos`

export default function PicturesPanel(){    

    const options = {
        method: 'GET',
        mode: 'cors',
        caches: 'cache'
    }

    const [images, setImages] = useState([])

    const createPhoto = (bytes) => `data:image/png;base64,${bytes}`

    useEffect(() => {
        fetch(apiUrl, options)
        .then(res => res.json())
        .then(page => setImages(page.content))
        .catch(console.log)
    }, [])
    return (
        <section className="PicturesPanel">
            <ul id='photosList'>
                <InputPhoto></InputPhoto>
                { images.map(image => (<Photo key={image.id} src={createPhoto(image.content)}/>))}
            </ul>
        </section>
    )
}