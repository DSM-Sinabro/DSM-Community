import React from 'react';
import {Link} from 'react-router';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                {this.props.listInfo.map((info, i) => { 
                    return (<Link to={info.link} key={i}> <li key={i}> {info.list} </li> </Link>)
                })}
            </ul>

        );
    }
}

List.defaultProps = {
    listInfo:[
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
            link: '/list',
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
    ] 
};

export default List;