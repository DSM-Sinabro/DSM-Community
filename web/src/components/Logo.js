import React from 'react';

class Logo extends React.Component{
    render(){
        return(
            <img src={this.props.src} alt={this.props.alt} id="logo"/>
        )
    }
}

export default Logo;