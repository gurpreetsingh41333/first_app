import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactRouter from './ReactRouter';
// import Parent from './Parent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReactRouter />, document.getElementById('root'));
registerServiceWorker();
