import { useState } from 'react'
import './InputPhoto.css'

import { BiCheck, BiImageAdd, BiX } from 'react-icons/bi'

export default function InputPhoto(){
    const apiUrl = `${import.meta.env.VITE_API_URL}/api/photos` 

    const getInputFile = () => document.getElementById('inputFile').files[0]

    const labelInputFile = <label htmlFor='inputFile'>
        <BiImageAdd className='icon'/>
    </label>

    const [icons, setIcons] = useState(labelInputFile)

    const handleOnSetFile = () => {
        const file = getInputFile()
        if(file){
            const reader = new FileReader()
            reader.addEventListener('load', () => {
                const inputContainer = document.querySelector('.InputPhoto')
                inputContainer.style.backgroundImage = `url(${reader.result})`
                inputContainer.style.backgroundSize = 'cover'
                setIcons(
                  <>
                    <BiX onClick={() => {
                        setIcons(labelInputFile)
                        inputContainer.style.backgroundImage = 'none'
                    }}
                    />
                    <BiCheck onClick={postPhoto}/>
                  </>
                )
            })
            reader.readAsDataURL(file)
        }
    }

    const postPhoto = () => {
        const formData = new FormData() 
        const file = getInputFile()
        formData.append('file', file)
        fetch(apiUrl, {
            method: 'POST',
            mode: 'cors',
            body: formData
        })
            .then(console.log)
            .catch(console.log)
    } 
    
    return (
        <form className='InputPhoto'>
            <li>
                {icons}
                <input type='file' name="inputFile" id="inputFile"  accept="image/png, image/jpeg" onChange={handleOnSetFile}/>
            </li>
        </form>
    )
}