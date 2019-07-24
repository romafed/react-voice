import React from 'react';
import { useTransition, animated } from 'react-spring';
import './loading.css'

const Loading = ({ show }) => {

    const transition = useTransition(show, null, {
        from: { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })

    return transition.map(({ item, key, props }) => {
        return !item
            ? (<animated.div style={props} key={key} className='loading'>
                <div className="loading__container">
                    <div className="dash uno"></div>
                    <div className="dash dos"></div>
                    <div className="dash tres"></div>
                    <div className="dash cuatro"></div>
                </div>
            </animated.div>)
            : null;
    })
}
export default Loading;