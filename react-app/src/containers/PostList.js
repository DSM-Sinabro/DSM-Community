import React from 'react';
import {Header,ContentList} from '../components';
import '../css/PostList.css';


class PostList extends React.Component{

    render(){
        return(

        <div>
            
        <Header />
        <ContentList />

        </div>
        )
    }
}

export default PostList;