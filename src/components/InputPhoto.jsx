import './InputPhoto.css'

import { BiImageAdd } from 'react-icons/bi'

export default function InputPhoto(){
    return (
        <form className='InputPhoto' encType='multipart/form-data'>
            <li className='first'>
                <label htmlFor='inputFile'>
                    <BiImageAdd className='icon'>
                    </BiImageAdd>
                </label>
                <input type='file' name="inputFile" id="inputFile"  accept="image/png, image/jpeg"/>
            </li>
        </form>
    )
}