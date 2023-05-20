import "./PageDict.css";
import ToolBar from "./wordList/ToolBar";
import WordStat from "./wordList/wordInfo/WordStat";


const PageDict = (props) => {
    return (
        <div className='main'>
            <ToolBar />
            <div>
                <WordStat word={props.word} transcription_uk={props.transcription_uk}
                voice_uk={props.voice_uk} transcription_us={props.transcription_us} 
                voice_us={props.voice_us} translation={props.translation} examples={props.examples} />
            </div>
        </div>
    )
}

export default PageDict;