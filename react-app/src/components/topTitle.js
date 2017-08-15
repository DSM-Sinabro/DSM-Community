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
           
        </button>
        </div>
        <hr className="underLine" />
      </div>

      );
    }
}

TopTitle.defaultProps = {
    topTitleName : "topTitle"
}


export default TopTitle;