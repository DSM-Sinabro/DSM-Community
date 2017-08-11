import React, {Component} from 'react';
import Header from '../components/Header';
import QwriteArea from '../components/QwriteArea';
import '../css/QnA.css';

class QnA extends Component{
    render(){
        return(
            <div id="QnA">
                <Header />
                <QwriteArea />
            </div>
        );
    }
}

export default QnA;