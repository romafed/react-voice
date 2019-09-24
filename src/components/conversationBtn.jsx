import React from 'react';
import useSpeech from '../hooks/useSpeech';
import './conversationBtn.css';

const ConversationBtn = ({ answersQuestions }) => {

    const [isStart, hendleSpeechStart] = useSpeech(answersQuestions);

    return (
        <div className='conversationBtn'>
            <button
                disabled={isStart}
                onClick={hendleSpeechStart}
            >
                <i className={isStart ? 'fa fa-volume-up isActive' : 'fa fa-volume-up'} aria-hidden="true"></i>
            </button>
            <div className={isStart ? 'pulse one' : 'pulse'}></div>
            <div className={isStart ? 'pulse two' : 'pulse'}></div>
        </div>
    );
}

export default ConversationBtn;