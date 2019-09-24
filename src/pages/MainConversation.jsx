import React from 'react';
import { useSelector } from 'react-redux';
import PageLink from '../components/common/pageLink';
import ConversationBtn from '../components/conversationBtn';
import './MainConversation.css';

const MainConversationPage = () => {

    const data = useSelector(state => state.data);

    return (
        <section className='conversation'>
            <ConversationBtn answersQuestions={data} />

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