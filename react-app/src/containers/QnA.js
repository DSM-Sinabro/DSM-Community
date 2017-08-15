import React, {Component} from 'react';
import Header from '../components/Header';
import QwriteArea from '../components/QwriteArea';
import List from '../components/List';
import '../css/QnA.css';

class QnA extends Component{
    render(){
        return(
            <div id="QnA">
                <Header />
                <section>
                    <List to= {'/list'} />
                    <QwriteArea />
                </section>
            </div>
        );
    }
}

export default QnA;