import React, { Component } from 'react';



class AgedCard extends Component {
    render() {
        return (
            <div className="card">
              You've aged {this.props.amount} years!  
            </div>
        );
    }
}

export default AgedCard;
