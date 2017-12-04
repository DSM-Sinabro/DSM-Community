import React, {Component} from 'react';

class QwriteArea extends Component{
    render(){
        return(
            <div id="QwriteArea">
                <div id="title">
                    <span>제목: </span><input type="text"/>
                </div>
                <div id="functions">
                    <div id="decoration">
                        <img src={require("../imgs/code.png")} alt="code"/>
                        <img src={require("../imgs/bold.png")} alt="bold"/>
                        <img src={require("../imgs/italic.png")} alt="italic"/>
                        <img src={require("../imgs/underline.png")} alt="underline"/>
                    </div>
                    <div id="align">
                        <img src={require("../imgs/align_left.png")} alt=""/>
                        <img src={require("../imgs/align_center.png")} alt=""/>
                        <img src={require("../imgs/align_right.png")} alt=""/>
                        <img src={require("../imgs/align_justify.png")} alt=""/>
                    </div>
                </div>
                <div id="upload">
                    <span>업로드: </span>
                    <div>
                        <img src={require("../imgs/picture.png")} alt="picture"/>
                    </div>
                    <div>
                        <img src={require("../imgs/folder.png")} alt="folder"/>
                    </div>
                </div>
                <div id="Qwrite">
                    <textarea></textarea>
                </div>
            </div>
        );
    }
}

export default QwriteArea;