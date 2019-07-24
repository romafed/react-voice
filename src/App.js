import React, { useContext, useState } from 'react';
import { Switch, Route, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import backgroundVideo from './img/Hud_R.mp4';

// Component
import MainConversationPage from './components/conversation-page/MainConversation';
import MainCustomizationPage from './components/customizations-page/MainCustom';
import './App.css';
import Loading from './components/common/loading';

function App() {

  const { location } = useContext(__RouterContext);
  const transition = useTransition(location, location => location.pathname, {
    initial: { transform: 'translateX(-100%)', position: 'absolute' },
    from: { transform: 'translateX(-80%)', position: 'absolute' },
    enter: { transform: 'translateX(0)', position: 'relative' },
    leave: { transform: 'translateX(-100%)', position: 'absolute' },
    config: { mass: 3, friction: 30 }
  });

  const [isLoaded, setLoading] = useState(false);

  return (
    <>
      <Loading show={isLoaded} />
      <video onLoadedData={() => setLoading(true)} autoPlay muted loop id="backgroundVideo">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <main className='mainContent'>
        {transition.map(({ item, props, key }) => (
          <animated.div
            className='animatedDiv'
            style={props}
            key={key}
          >
            <Switch location={item}>
              <Route path='/customize' component={MainCustomizationPage} />
              <Route exact path='/' component={MainConversationPage} />
            </Switch>
          </animated.div>
        ))}
      </main>
    </>
  );
}

export default App;
