import { useState } from "react";
import textToSpeech from '../../services/textToSpeech.js';

const SpellingPractice = () => {
  const [ word, setWord ] = useState('atmosphere');

  const handleInputChange = (e) => {
    setWord(e.target.value);
  }

  const handleSpeak = () => {
    textToSpeech(word);
  }

  return (
    <div>
      <h1>Spelling Practice App</h1>
      <p>Listen and spell the word:</p>
      <button onClick={handleSpeak}>Speak Word</button>
      <input 
        type="text" 
        placeholder="Type the word" 
        onChange={handleInputChange} 
      />
      <button>Submit</button>
    </div>
  )
}

export default SpellingPractice;