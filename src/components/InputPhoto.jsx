import { createRoot } from 'react-dom/client'
import './InputPhoto.css'
import { BiImageAdd } from 'react-icons/bi'
import ModalPhoto from './ModalPhoto'

const apiUrl = `${import.meta.env.VITE_API_URL}/api/photos`

export default function InputPhoto(){

    const getInputFile = () => document.getElementById('inputFile').files[0]

    const handleOnSetFile = () => {
        const file = getInputFile()
        if(file){
            const reader = new FileReader()
            reader.addEventListener('load', () => {
                const root = createRoot(document.getElementById('main'))
                root.render(<ModalPhoto src={reader.result}/>)
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
            <label htmlFor='inputFile'>
                <BiImageAdd className='icon'/>
            </label>
                <input type='file' name="inputFile" id="inputFile"  accept="image/png, image/jpeg" onChange={handleOnSetFile}/>
            </li>
        </form>
    )
}