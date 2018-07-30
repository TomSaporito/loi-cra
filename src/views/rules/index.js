import React, { Component } from 'react';
import styled from 'styled-components';

const RulesWrapper = styled.div`
    left: 0;
    padding: 1rem;
    background-color: #e6e6e6;
    display: ${props => props.rulesCollapse? 'none': 'block'}
    text-align: left;
    top: 3rem;
    bottom:0;
    position:fixed;
    overflow-y:scroll;
    overflow-x:hidden;
   
`;


class Rules extends Component {
    render() {
        return (
            <RulesWrapper rulesCollapse={this.props.rulesCollapse}>
                <div>
                    <h3>
                    Rules:
                    </h3>
                    <ul>
                        <li>
                            Costs 1 Money and 1 Labor to open a ministry and assign it a minister.
                        </li>
                        <li>
                            Costs either 1 Money or 1 Labor to keep the minister sane.
                        </li>
                        <li>
                            If you lose Money/Labor for a ministry that has not yet been started, the Ministry becomes ruled by a Lord of Insanity, or
                            you must use resources to open the ministry/assign it a minister and then subtract the designated
                            amount of resources from that ministry.
                        </li>
                        <li>
                            Reopen the ministry to change that Lord of Insanity into a minister
                        </li>
                        <li>
                            Lords of insanity roll once each per round. If they roll their call, "odds" or "evens", they can subtract 1 resource from
                            any ministry
                        </li>
                    </ul>
                
                    <h3>
                        Ministers:
                    </h3>
                    <p>
                        Last as a society from 1000+ years
                    </p>

                    <strong>or</strong>
                    
                    <h3>
                        Lords of Insanity:
                    </h3>
                    <p>
                        Destroy the society before it reaches 1000 years!
                    </p>
                </div>
            </RulesWrapper>
        );
    }
}

export default Rules;
