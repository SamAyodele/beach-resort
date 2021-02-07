import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RoomContextProvider } from './context/roomContext';

import App from './App';

ReactDOM.render(
  <RoomContextProvider>
    <Router>
      <App />
    </Router>
  </RoomContextProvider>,
  document.getElementById('root')
);
