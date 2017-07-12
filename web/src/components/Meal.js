import React from 'react';

class Meal extends React.Component{
    render(){
        return(
            <div id= {this.props.id} className="meal">
                <h3 id="mealTitle">{this.props.title}</h3>
                <img src={this.props.src} alt={this.props.alt} id="lunch" className="lunchimg" />
              <div className ="meals">
                  {this.props.meals[0]} <br/>
                  {this.props.meals[1]} <br/>
                  {this.props.meals[2]} <br/>
                  {this.props.meals[3]} <br/>
                  {this.props.meals[4]} <br/>
                  {this.props.meals[5]} <br/>
              </div>

            </div>
        )
    }
}

Meal.defaultProps = {
    meals : '급식입니다.'
}


export default Meal;