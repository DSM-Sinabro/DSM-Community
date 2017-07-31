import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App
    headerTitle="Hello world"
    contentTitle="This is React"
    contentBody="React is JS UI library"
/>, rootElement);