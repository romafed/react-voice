import React from 'react';
import useSpeech from './../../hooks/useSpeech';
import './conversationBtn.css';

const ConversationBtn = () => {

    const answersQuestions = [
        { questions: ['how are you'], answers: ['i am fine thank you'] },
        { questions: ['what are you doing'], answers: ['nothing'] },
        { questions: ['hello', 'хай'], answers: ['good by', 'hello Roman'] },
        { questions: ['you stupid', 'fuck you'], answers: ['no you', 'go away'] },
        { questions: ['time'], answers: [`it is ${new Date().getHours()} ${new Date().getMinutes()}`] }
    ]

    const [isStart, hendleSpeechStart] = useSpeech(answersQuestions);

    return (
        <button
            onClick={hendleSpeechStart}
            className='conversationBtn'
        >
            Talk
        </button>
    );
}

export default ConversationBtn;