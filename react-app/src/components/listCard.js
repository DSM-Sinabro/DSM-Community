import React from 'react';

class ListCard extends React.Component{
    render(){
        return(
 <div className="card">
            {/* 카드의 윗부분 cardType 은 프로젝트/동아리,
            title 은 제목 */}
            <div className="topdetails">
                <span className="cardType">{this.props.type}</span>
                <span className="title">{this.props.title}</span>
            </div>
            {/* 카드 아랫부분 users 는 사람 몇명인지
            others 는 그외의 다른 부분 majorDiv 는 무슨 과인지
            optionDiv 는 조건 나타내는 부분 */}
            <div className="details">
                <div className="users">
                    <span className="userscount">{this.props.users}명</span>
                </div>
                  <div className="others">
                    <div className="majorDiv">
                    <span className="major">{this.props.major}</span>
                    </div>
                    <div className="optionDiv">
                    <span className="optiontitle">조건 :</span><span className="option">{this.props.option}</span>
                    </div>
                </div>
            </div>
           
        </div>
        );
    }

}

ListCard.defaultProps = {
    type : '프로젝트',
    title : '시나브로 인원모집중임',
    users : '10',
    major : 'sw개발과',
    option : 'node.js',
}

export default ListCard;