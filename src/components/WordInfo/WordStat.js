import WordPronunce from './WordPronunce';
import './WordStat.css';
import React, {useState} from 'react';

function WordStat(props) {

  useState();
  
    return (
        <div className='word-stat'>
          <h2>{props.word}</h2>
          <WordPronunce transcription_us={props.transcription_us} transcription_uk={props.transcription_uk} />
          <div className='word-stat__translation'>{props.translation}</div>
          <div className='word-stat__example'>{props.examples}</div>
        </div>
      );
}

export default WordStat;