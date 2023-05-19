import './WordList.css';

function WordList(props) {
    return (
        <div className='word__list'>
            <WordStat word={word_list[0].word} transcription_uk={word_list[0].transcription_uk} voice_uk={word_list[0].voice_uk} transcription_us={word_list[0].transcription_us} 
            voice_us={word_list[0].voice_us} translation={word_list[0].translation} examples={word_list[0].examples}></WordStat>
        </div>
    );
}

export default WordList;