import React, { Component } from 'react';

class Card extends Component {


    formatDieNums(){
        return this.props.data.dieNums.map((n,i)=>` ${i===2? 'or': ''} ${n}${i<2? ',': ''}`);
    }

    render() {
        return (
            <div className="card">
                <p>
                    <strong className="insane">
                        {this.props.data.action} .
                    </strong>
                </p>
                <p>
                    Your {this.props.data.ministryEffected} could lose {this.props.data.falseOutcome} {this.props.data.cost} if you do
                    not roll a {this.formatDieNums()} .
                </p>

                <p>
                    Roll a {this.formatDieNums()} to get {this.props.data.trueOutcome} {this.props.data.cost} for your {this.props.data.ministryEffected} .
                </p>
            </div>
    );
    }
}

export default Card;
