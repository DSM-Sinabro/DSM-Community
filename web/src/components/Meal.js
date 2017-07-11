import React from 'react';

class Meal extends React.Component{
    render(){
        return(
            <div id= {this.props.id} className="meal">
                <h3 id="mealTitle">{this.props.title}</h3>
                  
              <div className="meals">{this.props.meals}</div>

            </div>
        )
    }
}

export default Meal;