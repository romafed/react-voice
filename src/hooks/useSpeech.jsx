import { useState } from 'react';
import ReactSpeech from './../speech-api/speechapi';

const useSpeech = (answersQuestions) => {

    const [isStart, setStart] = useState(false)

    const changeStart = (value) => setStart(value);
    const reactSpeech = new ReactSpeech(answersQuestions);
    reactSpeech.startApi(changeStart);

    return [isStart, reactSpeech.startSpeek];
}

export default useSpeech;