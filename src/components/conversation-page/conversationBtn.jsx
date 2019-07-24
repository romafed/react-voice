import React from 'react';
import useSpeech from './../../hooks/useSpeech';
import './conversationBtn.css';

const ConversationBtn = ({ answersQuestions }) => {

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