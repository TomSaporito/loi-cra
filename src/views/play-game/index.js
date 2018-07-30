import React, {Component} from 'react';
import styled from 'styled-components';



import Rules from '../rules';
import Card from '../../components/Card';
import AgedCard from '../../components/AgedCard';

const PlayGameWrapper = styled.div`
    h1{
        font-size: 2.4rem;
    }
    h2{
        margin-bottom: 0;
        font-size: 1rem;
    }
    #btn{
        padding: .5rem;
        text-transform: uppercase;
        font-size: 1.2rem;
        border-radius: 8px;
        background-color: #4F3824;
        color: #fefefe;
        border: 0;
        margin-right: 1rem;
    }
    button:active{
        box-shadow: 2px 2px 2px gray;
        transform: scale(.9);
    }

    #game{
        text-align:center;
    }

    header{
        position: fixed;
        height: 3rem;
        background-color: #D1603D;
        z-index: 300;
        top: 0;
        left: 0;
        text-align: left;
        align-items: center;
        display: flex;
        padding: 0 1rem;
        width: 100%;
        button{
            border: 0px;
            border-radius: 4px;
            background: none;
            flex: 1;
            justify-self: flex-end;
        }
        h1{
            font-size: 1.2rem;
            text-align: right;
            margin-bottom: 0;
            margin-top: 0;
           text-align: left;
            flex:1;

        }
    }
    .play-game__body{
        margin-top: 3.4rem;
    }
    .game-head{
        display: flex;
        text-align: left;
        align-items: baseline;
    }
`;

const CardWrapper = styled.div`
    display: flex;
    margin-top: 1rem;
    padding: 1rem;
    font-size: 1.6rem;
    min-height: 300px;
    align-items: center;
    justify-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 2px 2px 10px gray;
    background-color: #D0E37F;
    text-align: center;
    border: 8px ${props => (
        typeof props.currentCard !== 'number'? `solid ${props.currentCard.borderColor}`: 'double black'
    )};

    .card{
        width: 100%;
        text-align: center;
    }

`;



export default class PlayGame extends Component{
    render(){
        return(
            <PlayGameWrapper>
                <header>
                    
                    {/*Card #{this.props.currentCardIndex + 1}*/}
                    <h1>Lords of Insanity</h1>
                    <Rules rulesCollapse={this.props.rulesCollapse}/>
                    <button onClick={this.props.getRules}>
                        Rules
                    </button>
                </header>
                <div className="play-game__body">
                   <div className="game-head">
                        
                        <div>
                            <button disabled={this.props.age >= 1000} id="btn" onClick={this.props.generateCard}>
                                New Card
                            </button> 
                        </div>

                        <div>
                            <h2>
                            Civilization Age:
                            </h2>
                            <div>
                                <strong>
                                <span id="age">{this.props.age}</span>
                                </strong>/1000 years
                            </div>
                        </div>
                    </div>  
                    <CardWrapper currentCard={this.props.currentCard} id="game">
                        {this.props.currentCardIndex > -1 && typeof this.props.currentCard !== 'number'? <Card data={this.props.currentCard}/>: this.props.currentCardIndex > -1? <AgedCard borderColor={this.props.currentCard.borderColor} amount={this.props.yearsToGain}/> : 'Pick a New Card to start your civilization'}
                    </CardWrapper>    
                </div>
            </PlayGameWrapper>
        );
    }
}