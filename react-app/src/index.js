import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import './css/style.css';

import {Main} from './containers';
import {PostList} from './containers';
/*
container들을 여기서 import

예시 
import {Landing, InputLayout, FinalSubmit} from './containers';
*/

import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

// const rootElement = document.getElementById('root');

// ReactDOM.render(<Main
//     headerTitle="Hello world"
//     contentTitle="This is React"
//     contentBody="React is JS UI library"
// />, rootElement);

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component = {Main}>
            <IndexRoute component={Main} />
        </Route>
        <Route path="/list" component={PostList}>
            <IndexRoute component = {PostList} />
            </Route>
</Router>, 
document.getElementById('root')
);



// const rootElement = document.getElementById('root'); // public/index.html에서 id값이 root인 엘리먼트를 찾는 것 같음. 그 이후의 쓰임은 잘 모르겠음.
// ReactDOM.render(
    /*
    Virtual DOM rendering하는 부분, 아래와 같이 쓰임
    */
    // );

/** 예시 
 * 
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/">
            <IndexRoute component={Landing} />
            <Route path="/input" component={InputLayout}>
                <Route path="/finalsubmit" component={FinalSubmit} />
            </Route>
        </Route>
    </Router>, rootElement
    );
 */
