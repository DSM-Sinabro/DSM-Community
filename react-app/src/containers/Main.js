import React,{Component} from 'react';
import {Header,Content} from '../components';


class Main extends React.Component {

    render() {
        return (
            <div>
                <Header />
                
                <Content title={this.props.contentTitle}
                    body={this.props.contentBody} />                
            </div>
        );
    }
}

export default Main;