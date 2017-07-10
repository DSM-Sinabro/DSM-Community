import React from 'react';

class Meal extends React.Component{
    render(){
        return(
            <div id= {this.props.id} className="meal">
                <h3 id="mealTitle">{this.props.title}</h3>
                  
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

export default Meal;