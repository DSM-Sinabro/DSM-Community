import React from 'react';

class HotIssueBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIssue: this.props.hotIssues[0]
        }
        var hotIssues = this.props.hotIssues;
        var hotIssuesLength = hotIssues.length;
        var count = 0;

        setInterval(() => {
            count++;
            this.setState({currentIssue : hotIssues[count%hotIssuesLength]});
        }, 3000);
    }

    render() {
        return (
            <p id="hotissuebar">{this.state.currentIssue}</p>
        );
    }

}

HotIssueBar.defaultProps = {
    hotIssues: [
        'hello world',
        'please add hot issues'
    ],
}

export default HotIssueBar;