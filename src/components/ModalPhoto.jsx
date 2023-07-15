import './ModalPhoto.css'
import { BiCheck, BiX } from 'react-icons/bi'

export default function ModalPhoto({src, handleOnClick}){
    const backgroundImageStyle = {
        backgroundImage: `url(${src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    } 
    return (
        <section className='ModalPhoto'>
            <div className='imageContainer' onClick={handleOnClick}>
                <div className='image' style={backgroundImageStyle}>
                    <div className='cancel'>
                        <button>
                            <BiX className='icon'/>
                        </button>
                    </div>
                    <div className='send'>
                        <button>
                            <BiCheck className='icon'/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}