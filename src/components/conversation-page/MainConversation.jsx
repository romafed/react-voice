import React from 'react';
import PageLink from '../common/pageLink';
import ConversationBtn from './conversationBtn';
import formatingTime from './../../utils/formatingTime';
import './MainConversation.css';

const MainConversationPage = () => {

    const answersQuestions = [
        { questions: ['how are you'], answers: ['i am fine thank you'] },
        { questions: ['what are you doing'], answers: ['nothing'] },
        { questions: ['hello', 'хай'], answers: ['good by', 'hello Roman'] },
        { questions: ['you stupid', 'fuck you'], answers: ['no you', 'go away'] },
        { questions: ['time', 'година'], answers: [`it is ${formatingTime()}`] },
        { questions: ['година'], answers: [`на даний момент ${formatingTime()}`] }
    ]


    return (
        <section className='conversation'>

            <ConversationBtn answersQuestions={answersQuestions} />

            <PageLink
                className='conversation__link'
                to='/customize'
            >
                <i className="fa fa-plus" aria-hidden="true"></i>
            </PageLink>
        </section>
    );
}

export default MainConversationPage;