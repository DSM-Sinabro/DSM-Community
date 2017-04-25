import React from 'react';

class ImageSlider extends React.Component{
    constructor(props){
        super(props);
        let numOfImgs = this.props.imgList.length;
        let count = 0;
        this.state = {
            nowImgSrc : this.props.imgList[0].src
        }
        setInterval(()=>{
            count++;
            this.setState({nowImgSrc : this.props.imgList[count%numOfImgs].src});
        },3000);
    }

    render(){
        return (
            <img src={this.state.nowImgSrc} alt="image slider" id="imageSlider"/>
        );
    }
}

export default ImageSlider;