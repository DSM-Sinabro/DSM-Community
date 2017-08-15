import React from 'react';
import ListCard from './ListCard';
import TopTitle from './TopTitle';
import '../css/PostList.css';

class ContentList extends React.Component { 
    render() {
        return (

            // 글 목록 

    <div id = "PostDetails">
        <TopTitle />
            <div className="type">
                <span>모집분류 : </span>
                <input type="checkbox" value="none" id="projectCheck" name="check"/>
                <label htmlFor="projectCheck">프로젝트</label>
                <input type="checkbox" value="none" id="clubCheck" name = "check"/>
                <label htmlFor="clubCheck">동아리</label>
            </div>
            {/* 글쓰기 버튼 */}
            
            <input type="button" id="writeButton" value="글쓰기" fontSize="25em;"/>

            <div id = "content">
                <div id="cardContent">
                    <ListCard />
                </div>
            </div>
    </div>
        );
    }
}
export default ContentList;