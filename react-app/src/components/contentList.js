import React from 'react';
import ListCard from './ListCard';
import TopTitle from './TopTitle';
import '../css/PostList.css';


class ContentList extends React.Component { 

    // constructor (props){
    //     super(props);
    //     this.state = {
    //         topTitleName : '프로젝트 & 동아리 모집'
    //     }
    // }
    componentWillMount() {
        const script = document.createElement("script");

        script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js";
        script.async = true;

        document.body.appendChild(script);
    }
   
    render() {
        return (

            // 글 목록 
    <div id = "PostDetails">
        <TopTitle 
            topTitleName = "프로젝트 & 동아리 모집" />

            <div className="type">
                <span>모집분류 : </span>
               
                <input type="checkbox" value="none" id="projectCheck" name="check"/>
                <label htmlFor="projectCheck" >프로젝트{'\u00A0'}{'\u00A0'}</label>

                <input type="checkbox" value="none" id="clubCheck" name = "check"/>
                <label htmlFor="clubCheck" >동아리</label>
                
            </div>
            {/* 글쓰기 버튼 */}
            
            <button type="submit" className="writeButton">
                글쓰기
            </button>

           
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