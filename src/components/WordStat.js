import './WordStat.css';

function WordStat(props) {
    return (
        <div className='word-stat'>
          <h2>{props.word}</h2>
          
          <div className='word-stat__pronunce'>
            <div title='Американское произношение'>
                <span>{props.transcription_us}</span>
                <span className='aud_img'><audio className='aud_us'></audio></span>
            </div>
            <div title='Британское произношение'>
                <span>{props.transcription_uk}</span>
                <span className='aud_img'><audio className='aud_uk'></audio></span>
            </div>
          </div>
          
          <div className='word-stat__translation'>{props.translation}</div>
          <div className='word-stat__example'>{props.examples}</div>
        </div>
      );
}

export default WordStat;