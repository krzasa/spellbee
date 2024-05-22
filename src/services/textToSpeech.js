import axios from 'axios';

const API_KEY = import.meta.env.VITE_GOOGLE_TTS_API_KEY;
const API_URL = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${API_KEY}`;

const speak = async (text) => {
  const response = await axios.post(API_URL, {
    input: { text },
    voice: { languageCode: 'en-US', name: 'en-US-Wavenet-D' },
    audioConfig: { audioEncoding: 'MP3' },
  });
  const audioContent = response.data.audioContent;
  const audio = new Audio(`data:audio/mp3;base64,${audioContent}`);
  audio.play();
};

export default speak;