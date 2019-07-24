import React from 'react';
import PageLink from '../common/pageLink';
import ConversationBtn from './conversationBtn';
import formatingTime from './../../utils/formatingTime';
import './MainConversation.css';

const MainConversationPage = () => {

    const answersQuestions = [
        { questions: ['how are you'], answers: ['i am fine thank you'] },
        { questions: ['what are you doing'], answers: ['nothing'] },
        { questions: ['hello'], answers: ['good by', 'hello Roman'] },
        { questions: ['you stupid', 'f*** you'], answers: ['no you', 'go away'] },
        { questions: ['time'], answers: [`it is ${formatingTime()}`] },
        { questions: ['thank', 'thanks', 'thank you'], answers: ['You are welcome', 'No thanks you for creation of me - human'] }
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