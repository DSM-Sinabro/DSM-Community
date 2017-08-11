import React from 'react';
import listCard from './listCard';

class ContentList extends React.Component { 
    render() {
        return (

            // 글 목록 조회
          <div id="PostDetails">
        <span className= "highText">프로젝트 & 동아리 모집</span>
        <div id="searchForm">
        <input type="search" className="search" placeholder="" />
        <input type="button" className="searchButt" value="0" />
        </div>
        <hr className="underLine" />

    <div className="type">
            <span>모집분류:&nbsp</span>
           <input type="checkbox" value="none" id="projectCheck" name="check"/>
            <label for="projectCheck" /> &nbsp프로젝트 &nbsp
           <input type="checkbox" value="none" id="clubCheck" name="check" />
           <label for="clubCheck" />&nbsp 동아리 &nbsp
    </div>

 <input type="button" id="writeButton" value="글쓰기" font-size="25em;"/>
    
    {/* 내용 들어갈 전체 부분 */}
    <div id="content">
            {/* 카드 들어갈 전체 부분 */}
        <div id="cardContent">
            {/* 카드 하나 */}
       <ListCard />
         
        
        </div>
    </div>
    </div>


        );
    }
}



export default ContentList;