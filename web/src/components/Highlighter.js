import React from 'react';

class Highlighter extends React.Component {
    render() {
        return (
            <div id={this.props.id} className="highlighter">
                <h3 id="hightligtTitle" onClick={HelloThis.bind(this,this)}>{this.props.title}</h3>
                <hr />
                <ul>
                    <li>{this.props.list[0]}</li>
                    <li>{this.props.list[1]}</li>
                    <li>{this.props.list[2]}</li>
                    <li>{this.props.list[3]}</li>
                    <li>{this.props.list[4]}</li>
                </ul>
            </div>
        )
    }
}

function HelloThis(component) {
    console.log(component.props);
}

export default Highlighter;