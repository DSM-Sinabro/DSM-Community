import React from 'react';
import listCard from './listCard';
import topTitle from './topTitle';

class ContentList extends React.Component { 
    render() {
        return (

            // 글 목록 

    <div id = "PostDetails">
        <topTitle/>
            <div className="type">
                <span>모집분류 : &nbsp</span>
                <input type="checkbox" value="none" id="projectCheck" name="check"/>
                <label htmlFor="projectCheck">&nbsp프로젝트&npsp</label>
                <input type="checkbox" value="none" id="clubCheck" name = "check"/>
                <label htmlFor="clubCheck">&nbsp동아리&nbsp</label>
            </div>
            {/* 글쓰기 버튼 */}
            
            <input type="button" id="writeButton" value="글쓰기" font-size="25em;"/>

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