import React from 'react';
import Header from '../components/Header';
import ContentList from '../components/ContentList';
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