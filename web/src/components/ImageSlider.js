import React from 'react';

class ImageSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowImgSrc: this.props.imgList[0].src
        }
    }
    componentDidMount() {
        setInterval(() => {
            let numOfImgs = this.props.imgList.length;
            let count = 0;
            count++;
            this.setState({ nowImgSrc: this.props.imgList[count % numOfImgs].src });
        }, 3000);
    }

    render() {
        return (
            <div id="sliderBlock">
                <img id="imageSlider" src={this.state.nowImgSrc} />
                <span>O</span><span>O</span>
            </div>
        );
    }
}

export default ImageSlider;