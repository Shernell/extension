import WordStat from './components/WordStat';

function App() {
  
  const word_list = [
    {
      word: "word",
      transcription_uk: "tr_uk",
      voice_uk: "",
      transcription_us: "tr_us",
      voice_us: "",
      translation: "translation1",
      examples:"example1"
    }
  ]
  
  return (
    <WordStat word={word_list[0].word} transcription_uk={word_list[0].transcription_uk}
    voice_uk={word_list[0].voice_uk} transcription_us={word_list[0].transcription_us} 
    voice_us={word_list[0].voice_us} translation={word_list[0].translation} examples={word_list[0].examples}></WordStat>
  );
}

export default App;
