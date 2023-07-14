import './PicturesPanel.css'
import InputPhoto from './InputPhoto';
import Photo from './Photo';

export default function PicturesPanel(){
    return (
        <section className="PicturesPanel">
            <ul>
                <InputPhoto></InputPhoto>
                <Photo></Photo>
                <Photo></Photo>
                <Photo></Photo>
                <Photo></Photo>
                <Photo></Photo>
                <Photo></Photo>
                <Photo></Photo>
                <Photo></Photo>
            </ul>
            
        </section>
    )
}