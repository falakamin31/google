import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./global.css"
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

