import React from 'react';


class topTitle extends React.Component{
    render(){
        return(
        <div>
        <span className= "highText">프로젝트 & 동아리 모집</span>
        <div id="searchForm">
        <input type="search" className="search" placeholder="" />
        <input type="button" className="searchButt" value="0" />
        </div>
        <hr className="underLine" />
      </div>
      );
    }
}
export default topTitle;