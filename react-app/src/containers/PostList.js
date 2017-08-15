import React from 'react';
import {Header,ContentList} from '../components';
import {List} from '../components';
import '../css/PostList.css';


class PostList extends React.Component{

    render(){
        return(

        <div id="post-list">
            
        <Header />
        <List listInfo={[
                    {
                        list: '공지사항',
                        link: '/list',
                    },
                    {
                        list: '프로젝트 모집',
                        link: '/list',
                    },
                    {
                        list: '동아리 모집',
                        link: '/list'
                    },
                    {
                        list: 'QnA',
                        link: '/list'
                    },
                    {
                        list: '갤러리',
                        link: '/list'
                    },
                    {
                        list: '스터디 모집',
                        link: '/list'
                    },
                    {
                        list: '자유게시판',
                        link: '/freeboard',
                    },
                    {
                        list: '대회공지',
                        link: '/list'
                    },
                    {
                        list: '과제 제출',
                        link: '/list'
                    },
                    {
                        list: '보도자료',
                        link: '/list'
                    }
                ]}  to= {'/list'} />
        <ContentList />

        </div>
        )
    }
}

export default PostList;