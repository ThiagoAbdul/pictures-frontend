import './ModalPhoto.css'

export default function ModalPhoto({children, handleOnClick}){
    return (
        <div className='ModalPhoto'>
            <div onClick={handleOnClick}>{children}</div>
        </div>
    )
}