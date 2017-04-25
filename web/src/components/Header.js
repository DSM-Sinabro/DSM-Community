import React from 'react';
import Logo from './Logo'
import LoginMenu from './LoginMenu';
import Weather from './Weather'
import HotIssueBar from './HotIssueBar'

class Header extends React.Component {
    render() {
        return (
            <header>
                <Logo src="../images/logo.png" alt="Logo"/>
                <Weather weather="흐림" demp="21" dust="74"/>
                <HotIssueBar hotIssues={[
                    "<공지> 김성래 세트렉아이 취업 성공, 시나브로 학생들에게 치킨 쏠 예정",
                    "<QnA> 전공 동아리를 옮기고 싶은데 어느 동아리로 옮기는게 좋을까요?",
                    "<자유게시판> 오늘자 STAC 2017 설명회 요약"
                    ]}/>
                <LoginMenu/>
                <hr/>
            </header>
        )
    }
}

export default Header;