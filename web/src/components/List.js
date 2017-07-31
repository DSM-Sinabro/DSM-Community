import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                {this.props.listInfo.map((info, i) => {
                    return (<a href={info.link} key={i}><li key={i}>{info.list}</li></a>)
                })
                }
            </ul>
        );
    }
}

export default List;