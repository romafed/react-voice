import React from 'react';
import PageLink from '../common/pageLink';
import ConversationBtn from './conversationBtn';
import './MainConversation.css';

const MainConversationPage = () => {
    return (
        <section className='conversation'>

            <ConversationBtn/>

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