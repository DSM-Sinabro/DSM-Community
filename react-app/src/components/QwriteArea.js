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
                        <img src="../imgs/code.png" alt="code"/>
                        <img src="../imgs/bold.png" alt="bold"/>
                        <img src="../imgs/italic.png" alt="italic"/>
                        <img src="../imgs/underline.png" alt="underline"/>
                    </div>
                    <div id="align">
                        <img src="../imgs/align_left.png" alt=""/>
                        <img src="../imgs/align_center.png" alt=""/>
                        <img src="../imgs/align_right.png" alt=""/>
                        <img src="../imgs/align_justify.png" alt=""/>
                    </div>
                </div>
                <div id="upload">
                    <span>업로드: </span>
                    <div>
                        <img src="../imgs/picture.png" alt="picture"/>
                    </div>
                    <div>
                        <img src="../imgs/folder.png" alt="folder"/>
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