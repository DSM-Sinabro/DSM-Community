import React from 'react';
import Header from './Header';
import Content from './Content';
import List from './List';

class App extends React.Component {

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

App.defaultProps = {
    headerTitle : 'Hello world',
    contentTitle : 'Default content title',
    contentBody : 'Default content body'
}

export default App;