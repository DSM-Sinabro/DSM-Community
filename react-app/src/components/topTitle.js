import '../css/PostList.css';
import React from 'react';



class TopTitle extends React.Component{


    render(){
        return(
        <div>
        <span className= "highText">{this.props.topTitleName}</span>
        <div id="searchForm">
        <input type="search" className="search" placeholder="" />
        <button type="submit" className="searchButt">
        <img/>    
        </button>
        </div>
        <hr className="underLine" />
      </div>

      );
    }
}


export default TopTitle;