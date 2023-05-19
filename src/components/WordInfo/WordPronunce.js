import "./WordPronunce.css"
import voice from "../images/voice.svg";

const WordPronunce = (props) => {
    return (
        <div className='pronunce'>
            <div title='Американское произношение' className='pronunce__voice'>
                <span>{props.transcription_us}</span>
                <button type="button" className='aud_img'
                  style={{ backgroundImage: `url(${voice})`}}>
                  <audio className='aud_us'></audio></button>
            </div>
            <div title='Британское произношение' className='pronunce__voice'>
                <span>{props.transcription_uk}</span>
                <button type='button' className='aud_img'
                style={{ backgroundImage: `url(${voice})`}}>
                  <audio className='aud_uk'></audio></button>
            </div>
        </div>
    )
};

export default WordPronunce;