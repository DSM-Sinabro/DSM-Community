import React from 'react';
import {Link} from 'react-router';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                 {this.props.listInfo.map((info, i) => { 
                    return (<Link to={info.link} key={i}> <li key={i}> {info.list} </li> </Link>)
                 } 
                )
                 } 
            </ul>

        );
    }
}

export default List;