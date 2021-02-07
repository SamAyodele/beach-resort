import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './helpers/GlobalStyles';
import ScrollToTop from './helpers/scrollToTop';
import { NavBar } from './components';
import { Home, Rooms, SingleRoom, Error } from './pages';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={Home} />

        <Route exact path='/rooms/' component={Rooms} />

        <Route path='/rooms/:slug' component={SingleRoom} />

        <Route path='*' component={Error} />
      </Switch>
    </>
  );
};

export default App;
