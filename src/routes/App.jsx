import { useEffect } from 'react';
import Home from '../components/Pages/Home';
import SpellingPractice from '../components/Pages/SpellingPractice';

import * as words from '../services/words'

function App() {



useEffect(() => {
  const fetchWords = async () =>{
    const words = await practice.show()
    setPracticeList(words)
  }
  fetchWords()
},[])

useEffect(() => {
  const fetchRandom = async () =>{
    const wordsPlay = await words.show()
    setPlay(wordsPlay.word)
  }
  fetchRandom()
},[])

  return (
    <>
      <Home />
      
    </>
  )
}

export default App
