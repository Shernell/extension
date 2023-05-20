import MainMenu from './components/mainPages/MainMenu';
import SubMenu from './components/mainPages/SubMenu'
import PageDict from './components/mainPages/PageDict';
import logoGradRight from './components/images/logoGradRight.svg';
import background from './components/images/background.svg'
import './App.css'


const App = () => {
  
  const word_list = [
    {
      word: "word",
      transcription_uk: "tr_uk",
      voice_uk: "",
      transcription_us: "tr_us",
      voice_us: "",
      translation: "translation1",
      examples:"example1",
      date: new Date(),
    }
  ]
  
  return (
    <body style={{ backgroundImage: `url(${background})`}}>
      <div className='head'>
        <div className='logo' style={{ backgroundImage: `url(${logoGradRight})`}} />
        <MainMenu />
        <SubMenu />
      </div>
      <PageDict word={word_list[0].word} transcription_uk={word_list[0].transcription_uk}
                voice_uk={word_list[0].voice_uk} transcription_us={word_list[0].transcription_us} 
                voice_us={word_list[0].voice_us} translation={word_list[0].translation} examples={word_list[0].examples} />
    </body>
  );
}

export default App;
