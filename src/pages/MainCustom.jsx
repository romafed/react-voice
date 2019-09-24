import React from 'react';
import './MainCustom.css';

const MainCustomizationPage = ({ history }) => {

    const goBack = () => {
        history.goBack();
    }

    return (
        <section className='custom'>
            <h1>Not ready sorry :(</h1>
            <button onClick={goBack}> click to go back </button>
        </section>
    );
}

export default MainCustomizationPage;