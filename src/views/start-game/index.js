import React, {Component} from 'react';
import styled from 'styled-components';

const StartGameWrapper = styled.div`
    h1{
        font-size: 2.4rem;
    }
    button{
        padding: 1rem;
        text-transform: uppercase;
        font-size: 1.4rem;
        border-radius: 8px;
        background-color: #4F3824;
        color: #fefefe;
        border: 3px solid transparent;
    }
    button:active{
        box-shadow: 2px 2px 2px gray;
        transform: scale(.9);
    }
`;

export default class StartGame extends Component{
    render(){
        return(
            <StartGameWrapper>
                <h1>
                    Lords<br/>of<br/><span className="insane">Insanity</span>
                </h1>
                <button type="button" onClick={this.props.startGame}>
                    Start Game
                </button>
            </StartGameWrapper>
        );
    }
}