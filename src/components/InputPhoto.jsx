import { createRoot } from 'react-dom/client'
import './InputPhoto.css'
import { BiImageAdd } from 'react-icons/bi'
import ModalPhoto from './ModalPhoto'

export default function InputPhoto(){

    const getInputFile = () => document.getElementById('inputFile').files[0]

    const handleOnSetFile = () => {
        const file = getInputFile()
        if(file){
            const root = createRoot(document.getElementById('modal'))
            root.render(<ModalPhoto file={file} onClose={() => root.unmount()}/>)
        }
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