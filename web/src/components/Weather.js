import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div id="weather">
                <strong>
                    <i className="fa fa-cloud" aria-hidden="true"></i>
                    <span>{this.props.weather}</span>
                    <span>온도 : {this.props.demp}°c</span>
                    <span>미세먼지 : {this.props.dust}</span>
                </strong>
            </div>
        );
    }
}

export default Weather;