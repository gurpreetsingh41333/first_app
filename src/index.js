import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Parent from './Parent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Parent />, document.getElementById('root'));
registerServiceWorker();
