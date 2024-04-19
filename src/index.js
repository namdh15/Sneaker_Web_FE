import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, useLocation } from 'react-router-dom';
import './index.scss';

import AppContainer from './AppContainer';
const WrapperScrollTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <WrapperScrollTop>
      <AppContainer />
    </WrapperScrollTop>
  </BrowserRouter>
);