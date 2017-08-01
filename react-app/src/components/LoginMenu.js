import React from 'react';

class LoginMenu extends React.Component{
    render(){
        return (
            <div id="LoginMenu">
                <a href="/login">로그인</a>
                <a href="/signup">회원가입</a>
            </div>
        )
    }
}

export default LoginMenu;